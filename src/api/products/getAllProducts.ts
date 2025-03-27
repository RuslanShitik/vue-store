import dummyjson from '@/plugins/dummyjson.ts'
import type { Product, WithPagination } from '@/types'


export default async () => {
  const response = await dummyjson.get<WithPagination<{ products: Product[] }>>('/products')
  return response.data
}
