import { localStorageConstants } from '@/utils/constants.ts'
import type { Product } from '@/types'

export default (product: Product): void => {
  const products = JSON.parse(localStorage.getItem(localStorageConstants.cart) ?? 'null') ?? []
  products.push(product)
  localStorage.setItem(localStorageConstants.cart, JSON.stringify(products))
}
