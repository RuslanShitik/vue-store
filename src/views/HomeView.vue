<script setup lang="ts">
import BaseContentView from '@/components/BaseContentView.vue'
import { searchProducts } from '@/api/products'
import { useAsyncState } from '@vueuse/core'
import { computed, reactive, watch } from 'vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseSkeleton from '@/components/UI/BaseSkeleton.vue'
import type { SearchProductsParams } from '@/api/products/searchProducts.ts'
import type { WithRequired } from '@/types'
import ProductGrid from '@/components/product/ProductGrid.vue'
import ProductLargeSlider from '@/components/product/ProductLargeSlider.vue'

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


const { state, isLoading, execute } = useAsyncState(searchProducts, null, { immediate: false })
const { state: sliderProductsState, isLoading: sliderProductsIsLoading, } = useAsyncState(
  () => searchProducts({ q: 'Shirt', limit: 5 }),
  null,
)

const sliderProducts = computed(() => sliderProductsState.value?.products ?? [])

const searchParams = reactive<WithRequired<SearchProductsParams, 'skip'>>({
  q: '',
  skip: 0,
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


watch(
  searchParams,
  (val) => {
    execute(0, val)
  },
  { immediate: true },
)

// TODO: add debounce
</script>

<template>
  <div>
    <div class="mb-8">
      <BaseSkeleton v-if="sliderProductsIsLoading" class="h-100"/>
      <ProductLargeSlider v-else :products="sliderProducts"/>
    </div>
    <BaseContentView title="All products">
      <template #title>
        <div class="flex flex-wrap gap-4">
          <BaseSelect
            v-model="searchParams.sortBy"
            :options="sortByOptions"
            placeholder="Sort by"
          />
          <BaseSelect
            v-model="searchParams.order"
            :options="orderOptions"
            placeholder="Sort method"
          />
          <BaseInput v-model="searchParams.q" type="text" placeholder="Search Products" />
        </div>
      </template>

      <ProductGrid :is-loading="isLoading" :products="products" />

      <div class="flex justify-center gap-4 mt-4">
        <BaseSkeleton class="h-10 w-64" v-if="isLoading" />
        <template v-else>
          <BaseButton :disabled="!hasPreviousPage" @click="handlePreviousPage">
            Previous page
          </BaseButton>
          <BaseButton :disabled="!hasNextPage" @click="handleNextPage"> Next page </BaseButton>
        </template>
      </div>
      <!--    TODO: Pagination-->
    </BaseContentView>
  </div>
</template>
