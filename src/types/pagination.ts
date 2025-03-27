export type Pagination = {
  total: number,
  skip: number,
  limit: number,
}

export type WithPagination<T> = Pagination & T

