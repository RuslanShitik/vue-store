import { localStorageConstants } from '@/utils/constants.ts'
import type { Product } from '@/types'

export default (id: number) => {
  const products: Product[] =
    JSON.parse(localStorage.getItem(localStorageConstants.cart) ?? 'null') ?? []

  localStorage.setItem(
    localStorageConstants.cart,
    JSON.stringify(products.filter((el) => el.id === id)),
  )
}
