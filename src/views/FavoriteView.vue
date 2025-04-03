<script setup lang="ts">
import BaseContentView from '@/components/BaseContentView.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import type { Product } from '@/types'
import { useFavoriteProductsStore } from '@/store/favoriteProducts.ts'
import { storeToRefs } from 'pinia'
import usePageTitle from '@/composables/usePageTitle.ts'

usePageTitle('Favorite')

const favoriteProductsStore = useFavoriteProductsStore()
const { removeFavorite } = favoriteProductsStore
const { favoriteProducts } = storeToRefs(favoriteProductsStore)

const handleFavoriteClick = (product: Product) => {
  removeFavorite(product.id)
}

</script>

<template>
  <BaseContentView title="Favorites">
    <ProductGrid @click-favorite="handleFavoriteClick" :products="favoriteProducts" />
  </BaseContentView>
</template>

<style scoped></style>
