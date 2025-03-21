<script setup lang="ts">
import { useSlots } from 'vue'

defineProps<{
  title: string
}>()

const slots = useSlots()
</script>

<template>
  <div>
    <div class="mb-8 flex justify-between">
      <div class="flex items-center">
        <p class="text-3xl">{{ title }}</p>
      </div>
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
