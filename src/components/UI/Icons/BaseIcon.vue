<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

type IconCollection = 'heart' | 'heart-fill' | 'x-lg' | 'ban' | 'cart-check' | 'cart-dash-fill'

defineProps<{
  icon: IconCollection
}>()

const iconCollection: Record<IconCollection, ReturnType<typeof defineAsyncComponent>> = {
  'heart': defineAsyncComponent(() => import('@/components/UI/Icons/IconHeart.vue')),
  'heart-fill': defineAsyncComponent(() => import('@/components/UI/Icons/IconHeartFill.vue')),
  'x-lg': defineAsyncComponent(() => import('./IconXLg.vue')),
  'ban': defineAsyncComponent(() => import('./IconBan.vue')),
  'cart-check': defineAsyncComponent(() => import('./IconCartCheck.vue')),
  'cart-dash-fill': defineAsyncComponent(() => import('./IconCartDashFill.vue')),
}
</script>

<template>
  <component :is="iconCollection[icon]" />
</template>

<style scoped>
svg {
  display: inline-block;
}
</style>
