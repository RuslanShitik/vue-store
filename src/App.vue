<script setup lang="ts">
import BaseDrawer from '@/components/UI/BaseDrawer.vue'
import { useToggle } from '@vueuse/core'
import ProductCard from '@/components/product/ProductCard.vue'
import { useCartStore } from '@/store/cart.ts'
import { storeToRefs } from 'pinia'
import MessageEmpty from '@/components/UI/MessageEmpty.vue'
import BaseIcon from '@/components/UI/Icons/BaseIcon.vue'

const [isOpen, toggle] = useToggle()

const store = useCartStore()
const { removeItem } = store
const { cartItems } = storeToRefs(store)

const handleClickCart = (id: number) => {
  removeItem(id)
}
</script>

<template>
  <div class="bg-sky-200 px-2 py-16 min-h-[100vh]">
    <div class="bg-white rounded-2xl container mx-auto">
      <header class="border-b border-gray-200 p-8 flex justify-between">
        <div class="flex gap-4">
          <RouterLink to="/">
            <img class="size-12" src="@/assets/logo.svg" alt="logo" />
          </RouterLink>
          <div class="flex flex-col justify-between">
            <p class="text-xl font-bold">Vue-store</p>
            <p class="text-sm text-gray-400">The best shop!</p>
          </div>
        </div>
        <div class="flex text-gray-400 items-center gap-4">
          <BaseDrawer v-model="isOpen">
            <template #title>
              <p class="text-2xl">Your cart</p>
            </template>
            <template #default>
              <div v-if="cartItems.length" class="flex flex-col gap-4">
                <ProductCard
                  v-for="product in cartItems"
                  :key="product.id"
                  :product="product"
                  is-in-cart
                  @click-cart="handleClickCart(product.id)"
                />
              </div>
              <MessageEmpty v-else/>
            </template>
            <template #footer>
              <p>footer</p>
            </template>
          </BaseDrawer>
          <button class="cursor-pointer" @click="toggle()">Cart <BaseIcon icon="cart-check"/></button>
          <RouterLink exactActiveClass="text-green-600 font-bold" to="/favorite">Favorite <BaseIcon icon="heart"/></RouterLink>
        </div>
      </header>

      <main class="p-8">
        <RouterView />
      </main>

      <footer class="border-t border-gray-200 p-8">
        <p class="text-gray-400">
          Created by
          <a class="underline" href="https://github.com/RuslanShitik" target="_blank">
            RuslanShitik
          </a>
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
