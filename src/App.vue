<script setup lang="ts">
import BaseDrawer from '@/components/UI/BaseDrawer.vue'
import { useToggle } from '@vueuse/core'

const [isOpen, toggle] = useToggle()
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
            <p class="text-xl font-bold">Shop name</p>
            <p class="text-sm text-gray-400">The best shop!</p>
          </div>
        </div>
        <div class="flex text-gray-400 items-center gap-4 underline">
          <BaseDrawer v-model="isOpen"> Drawer </BaseDrawer>
          <button @click="toggle()">Cart</button>
          <RouterLink to="/favorite">Favorite</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
          <!--          TODO: links, icons-->
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

<!--

  <Layout>
    <Header>
    </Header>

    <RouterView>
      <Page>
        <NewsSlider/>
        <BaseContentView>
          <ProductsGrid/>
        </BaseContentView>
      </Page>
    </RouterView>

    <Footer>
    </Footer>
  </Layout>

-->
