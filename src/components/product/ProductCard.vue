<script setup lang="ts">
import type { Product } from '@/types'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseIcon from '@/components/UI/Icons/BaseIcon.vue'
import { computed } from 'vue'

const props = defineProps<{
  product: Product,
  isInCart?: boolean,
  isFavorite?: boolean
}>()

defineEmits<{
  (e: 'clickCart'): void,
  (e: 'clickFavorite'): void
}>()

const likeIcon = computed(() => props.isFavorite ? 'heart-fill' : 'heart')
const cartIcon = computed(() => props.isInCart ? 'cart-dash-fill' : 'cart-check')

</script>

<template>
  <div class="relative border border-gray-200 rounded-xl overflow-hidden shadow transition-shadow duration-300 hover:shadow-xl">
    <BaseButton @click="$emit('clickFavorite')" class="absolute top-2 left-2">
      <BaseIcon :icon="likeIcon"/>
    </BaseButton>
    <BaseButton @click="$emit('clickCart')"  class="absolute bottom-4 right-4">
      <BaseIcon :icon="cartIcon"/>
    </BaseButton>
    <img class="object-contain w-[100%] h-48" :src="product.thumbnail" :alt="product.title"/>
    <div class="p-4 space-y-2">
      <!--      TODO: max 2 lines and truncate-->
      <p class="truncate">{{product.title}}</p>
      <div>
        <p class="text-sm text-gray-400">Price:</p>
        <p class="font-bold">{{product.price}}$</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
