<script setup lang="ts">
// TODO: size, color
</script>

<template>
  <button
    class="cursor-pointer px-3.5 py-2 rounded-lg border bg-white border-gray-200 text-gray-400 transition-[background-color] hover:bg-gray-100 disabled:bg-gray-100 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>
