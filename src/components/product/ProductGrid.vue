<script setup lang="ts">

import ProductCard from '@/components/product/ProductCard.vue'
import ProductCardSkeleton from '@/components/product/ProductCardSkeleton.vue'
import type { Product } from '@/types'
import MessageEmpty from '@/components/UI/MessageEmpty.vue'

defineProps<{
  isLoading?: boolean;
  products: Array<Product & {isInCart?: boolean, isFavorite?: boolean}>;
}>()

defineEmits<{
  (e: 'clickCart', product: Product): void
  (e: 'clickFavorite', product: Product): void
}>()

</script>

<template>
  <div v-if="isLoading || !!products.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <template v-if="isLoading">
      <ProductCardSkeleton v-for="i in 16" :key="i" />
    </template>
    <template v-else>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :is-in-cart="product.isInCart"
        :is-favorite="product.isFavorite"
        @click-cart="$emit('clickCart', product)"
        @click-favorite="$emit('clickFavorite', product)"
      />
    </template>
  </div>
  <MessageEmpty v-else/>
</template>

<style scoped>

</style>
