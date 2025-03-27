import dummyjson from '@/plugins/dummyjson.ts'
import type { PaginationParams, Product, SortParams, WithPagination } from '@/types'

type SearchProductsParams = {
  q?: string
} & SortParams & PaginationParams

export default async (params?: SearchProductsParams) => {
  const response = await dummyjson.get<
    WithPagination<{
      products: Product[]
    }>
  >('/products/search', { params })
  return response.data
}
