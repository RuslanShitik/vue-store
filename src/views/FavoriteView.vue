<script setup lang="ts">

import BaseContentView from '@/components/BaseContentView.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'

</script>

<template>
  <BaseContentView title="Favorites">
    <ProductGrid :products="[]"/>
  </BaseContentView>
</template>

<style scoped>

</style>
