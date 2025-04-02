<script setup lang="ts">

import BaseContentView from '@/components/BaseContentView.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import useFavoriteProducts from '@/composables/useFavoriteProducts.ts'
import type { Product } from '@/types'

const {favoriteProducts, removeFavorite} = useFavoriteProducts()


const handleFavoriteClick = (product: Product) => {
  removeFavorite(product.id)
}

</script>

<template>
  <BaseContentView title="Favorites">
    <ProductGrid @click-favorite="handleFavoriteClick" :products="favoriteProducts"/>
  </BaseContentView>
</template>

<style scoped>

</style>
