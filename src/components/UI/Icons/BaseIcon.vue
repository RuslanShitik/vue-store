<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

type IconCollection = 'heart' | 'heart-fill'

defineProps<{
  icon: IconCollection
}>()

const iconCollection: Record<IconCollection, ReturnType<typeof defineAsyncComponent>> = {
  'heart': defineAsyncComponent(() => import('@/components/UI/Icons/IconHeart.vue')),
  'heart-fill': defineAsyncComponent(() => import('@/components/UI/Icons/IconHeartFill.vue'))
}

</script>

<template>
  <component :is="iconCollection[icon]" />
</template>

<style scoped>
svg {
  display: inline;
}
</style>
