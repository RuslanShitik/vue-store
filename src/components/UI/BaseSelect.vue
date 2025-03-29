<script setup lang="ts">
const model = defineModel()
defineProps<{
  options: {label: string, value: string | number}[]
  placeholder?: string
}>()
</script>

<template>
  <select
    class="px-3.5 py-2 rounded-lg border bg-white border-gray-200 text-gray-400"
    v-model="model"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{option.label}}
    </option>
  </select>
</template>

<style scoped>

</style>
