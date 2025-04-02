import { ref, watch } from 'vue'
import type { Product } from '@/types'

const localStorageKey = 'cart_products'

const cartItems = ref<Product[]>(
  JSON.parse(localStorage.getItem(localStorageKey) ?? 'null') ?? [],
)

export default () => {


  const addItem = (product: Product) => {
    cartItems.value = [...cartItems.value, product]
  }

  const removeItem = (id: number) => {
    cartItems.value = cartItems.value.filter((cartItem) => cartItem.id !== id)
  }

  watch(cartItems, (newValue) => {
    console.log('newValue', newValue)
    localStorage.setItem(localStorageKey, JSON.stringify(newValue))
  })

  return {
    cartItems,
    addItem,
    removeItem,
  }
}
// TODO: refactor to PINIA
