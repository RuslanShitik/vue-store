type Ordering = 'asc' | 'desc'

export type PaginationParams = {
  limit?: number
  skip?: number
}

export type SortParams = {
  order?: Ordering
  sortBy?: string
}
