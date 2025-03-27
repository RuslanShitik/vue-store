<script setup lang="ts">
const model = defineModel()
defineProps<{
  options?: unknown[]
  placeholder?: string
}>()
</script>

<template>
  <select
    class="px-3.5 py-2 rounded-lg border bg-white border-gray-200 text-gray-400"
    v-model="model"
  >
    <option v-for="(option, i) in options" :key="option?.value || i" :value="option?.value || option">
      {{option?.label || option}}
    </option>
  </select>
</template>

<style scoped>

</style>
