<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'
import type { Product } from '@/types'
import { ref, computed } from 'vue'

const props = defineProps<{ products: Product[] }>()
defineEmits<{ (e: 'clickBuy', product: Product): void }>()

const activeIndex = ref(0)

const activeProduct = computed(() => props.products[activeIndex.value])

const handleNext = () => {
  activeIndex.value = (activeIndex.value + 1) % props.products.length
}

const handlePrev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.products.length) % props.products.length
}
</script>

<template>
  <div
    class="border border-gray-200 rounded-xl h-100 relative"
  >

    <Transition name="fade" mode="out-in">
      <div class="relative h-full flex items-center" :key="activeIndex">
        <img class="absolute md:size-100 right-0" :src="activeProduct.thumbnail" :alt="activeProduct.title" />
        <div class="relative max-w-100 ml-0 p-2 md:p-0 md:ml-24">
          <p class="text-2xl  md:text-5xl mb-2">{{ activeProduct.title }}</p>
          <BaseButton @click="$emit('clickBuy', activeProduct)">Buy now!</BaseButton>
        </div>
      </div>
    </Transition>

    <div class="absolute w-full bottom-2 flex justify-center gap-2">
      <BaseButton @click="handlePrev" class="">
        {{ '<' }}
      </BaseButton>
      <BaseButton @click="handleNext" class="">
        {{ '>' }}
      </BaseButton>
    </div>
  </div>
</template>
