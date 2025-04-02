import { ref, watch } from 'vue'
import type { Product } from '@/types'

export default () => {
  const favoriteProducts = ref<Product[]>(
    JSON.parse(localStorage.getItem('favorite_products') ?? 'null') ?? [],
  )

  const addFavorite = (product: Product) => {
    favoriteProducts.value = [...favoriteProducts.value, product]
  }

  const removeFavorite = (id: number) => {
    favoriteProducts.value = favoriteProducts.value.filter((favorite) => favorite.id !== id)
  }

  watch(favoriteProducts, (newValue) => {
    console.log('newValue', newValue)
    localStorage.setItem('favorite_products', JSON.stringify(newValue))
  })

  return {
    favoriteProducts,
    addFavorite,
    removeFavorite,
  }
}

// TODO: refactor to PINIA
