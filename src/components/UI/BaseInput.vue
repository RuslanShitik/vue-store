<script setup lang="ts">
const model = defineModel<string>()

</script>

<template>
  <input
    class="px-3.5 py-2 rounded-lg border bg-white border-gray-200 text-gray-400"
    v-model="model"
  />
</template>

<style scoped></style>
