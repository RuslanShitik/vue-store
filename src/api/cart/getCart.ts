import type { Product } from '@/types'
import { localStorageConstants } from '@/utils/constants.ts'

export default (): Product[] => {
  const products = JSON.parse(localStorage.getItem(localStorageConstants.cart) ?? 'null') ?? []
  return products
}
