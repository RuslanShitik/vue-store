import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Product } from '@/types'

export const useFavoriteProductsStore = defineStore('favoriteProducts', () => {
  const localStorageKey = 'favorite_products'

  const favoriteProducts = ref<Product[]>(
    JSON.parse(localStorage.getItem(localStorageKey) ?? 'null') ?? [],
  )

  const addFavorite = (product: Product) => {
    favoriteProducts.value = [...favoriteProducts.value, product]
  }

  const removeFavorite = (id: number) => {
    favoriteProducts.value = favoriteProducts.value.filter((favorite) => favorite.id !== id)
  }

  watch(favoriteProducts, (newValue) => {
    localStorage.setItem(localStorageKey, JSON.stringify(newValue))
  })

  return {
    favoriteProducts,
    addFavorite,
    removeFavorite,
  }
})
