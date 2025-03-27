<script setup lang="ts">
import BaseContentView from '@/components/BaseContentView.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import { searchProducts } from '@/api/products'
import { useAsyncState, useToggle } from '@vueuse/core'
import { computed, reactive, watch } from 'vue'
import ProductCardSkeleton from '@/components/product/ProductCardSkeleton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseDrawer from '@/components/UI/BaseDrawer.vue'
import BaseSkeleton from '@/components/UI/BaseSkeleton.vue'


const sortByOptions = [
  {
    label: 'By price',
    value: 'price',
  },
  {
    label: 'By name',
    value: 'name',
  },
]

const orderOptions = [
  {
    label: 'Low first',
    value: 'asc',
  },
  {
    label: 'High first',
    value: 'desc',
  },
]


const [isOpen, toggle] = useToggle()
const { state, isLoading, execute } = useAsyncState(searchProducts, null)


const searchParams = reactive({
  q: '',
  sortBy: null,
  order: null,
  skip: 0
})


const products = computed(() => state.value?.products ?? [])
const limit = computed<number>(() => state.value?.limit ?? 0)
const total = computed<number>(() => state.value?.total ?? 0)

const hasNextPage = computed(() => searchParams.skip + limit.value < total.value)
const hasPreviousPage = computed(() => searchParams.skip !== 0)


const handleNextPage = () => {
  searchParams.skip += limit.value
}

const handlePreviousPage = () => {
  searchParams.skip = Math.max(0, searchParams.skip - limit.value)
}


watch(searchParams, (val) => {
  execute(0, val)
})

// TODO: add debounce
</script>

<template>
  <!--  TODO: News product slider-->
  <BaseContentView title="Products">
    <BaseDrawer v-model="isOpen">
      Drawer
    </BaseDrawer>
    <template #title>
      <div class="flex gap-4 flex-wrap">
        <BaseButton @click="toggle">Cart</BaseButton>
        <BaseSelect v-model="searchParams.sortBy" :options="sortByOptions" placeholder="Sort by" />
        <BaseSelect v-model="searchParams.order" :options="orderOptions" placeholder="Sort method" />
        <BaseInput v-model="searchParams.q" type="text" placeholder="Search Products" />
      </div>
    </template>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <template v-if="isLoading">
        <ProductCardSkeleton v-for="i in 16" :key="i" />
      </template>
      <template v-else>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </template>
    </div>
    <div class="flex justify-center gap-4 mt-4  ">
      <BaseSkeleton class="h-10 w-64" v-if="isLoading"/>
      <template v-else>
        <BaseButton :disabled="!hasPreviousPage" @click="handlePreviousPage">
          Previous page
        </BaseButton>
        <BaseButton :disabled="!hasNextPage" @click="handleNextPage">
          Next page
        </BaseButton>
      </template>
    </div>
<!--    TODO: Pagination-->
  </BaseContentView>
</template>
