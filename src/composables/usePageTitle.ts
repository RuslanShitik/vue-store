import { useTitle } from '@vueuse/core'

export default (title: string) => {
  return useTitle(`Vue-store | ${title}`)
}
