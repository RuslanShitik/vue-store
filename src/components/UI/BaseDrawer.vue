<script setup lang="ts">
import type { MaybeRef } from '@vueuse/core'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseIcon from '@/components/UI/Icons/BaseIcon.vue'
import { useSlots } from 'vue'

const slots = useSlots()

const isOpen = defineModel<MaybeRef<boolean>>()


</script>

<template>
  <Teleport v-if="isOpen" to="body">
    <div class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/75">
      <div class="w-full flex flex-col sm:w-100 h-full bg-white">
        <div class="p-4 flex justify-between border-b border-gray-200">
          <div>
            <slot name="title"/>
          </div>
          <BaseButton class="" @click="isOpen = false">
            <BaseIcon icon="x-lg"/>
          </BaseButton>
        </div>
        <div class="flex-1 overflow-y-auto p-4">
          <slot/>
        </div>
        <div v-if="slots.footer" class="border-t p-4 border-gray-200">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
