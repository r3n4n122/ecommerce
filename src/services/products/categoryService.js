import { getInstance } from "../fetchApiService.js"

export const listCategories = async () => {
  const response = await getInstance({
    path: '/products/categories'
  })

  return response.data
}