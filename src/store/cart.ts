import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const localStorageKey = 'cart_products'

  const cartItems = ref<Product[]>(
    JSON.parse(localStorage.getItem(localStorageKey) ?? 'null') ?? [],
  )
  const addItem = (product: Product) => {
    cartItems.value = [...cartItems.value, product]
  }

  const removeItem = (id: number) => {
    cartItems.value = cartItems.value.filter((cartItem) => cartItem.id !== id)
  }

  watch(cartItems, (newValue) => {
    localStorage.setItem(localStorageKey, JSON.stringify(newValue))
  })

  return {
    cartItems,
    addItem,
    removeItem,
  }
})
