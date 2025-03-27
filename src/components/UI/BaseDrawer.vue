<script setup lang="ts">
import type { MaybeRef } from '@vueuse/core'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseIcon from '@/components/UI/Icons/BaseIcon.vue'

const isOpen = defineModel<MaybeRef<boolean>>()


</script>

<template>
  <Teleport v-if="isOpen" to="body">
    <div class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/75">
      <div class="relative w-full sm:w-100 h-full bg-white">
        <BaseButton class="absolute right-4 top-4" @click="isOpen = false">
          <BaseIcon icon="x-lg"/>
        </BaseButton>
        <div class="p-4 border-b">
          <slot name="title"/>
        </div>
        <div>
          <slot/>
        </div>
        <div>

        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
