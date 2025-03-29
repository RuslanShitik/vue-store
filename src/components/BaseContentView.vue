<script setup lang="ts">

defineProps<{
  title: string
}>()

</script>

<template>
  <div>
    <div class="mb-8 flex flex-wrap gap-4 justify-between">
      <div class="flex items-center">
        <p class="text-3xl">{{ title }}</p>
      </div>
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
