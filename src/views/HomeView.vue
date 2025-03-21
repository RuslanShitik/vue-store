<script setup lang="ts">
import BaseContentView from '@/components/BaseContentView.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import type { Product } from '@/types'
import BaseIcon from '@/components/UI/Icons/BaseIcon.vue'

const products: Product[] = Array.from({ length: 10 }, (el, i) => ({
  id: i + 1,
  title: 'Some title of product and it is tooooooooo long long long long',
  price: 2 * (i + 1),
  thumbnail: 'https://placehold.co/600x400'
}))
</script>

<template>
<!--  TODO: News product slider-->
  <BaseContentView title="Products">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div>
      some text and
      <span><BaseIcon :icon="'heart'"/></span>

    </div>
  </BaseContentView>
</template>
