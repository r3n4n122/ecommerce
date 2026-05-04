import { getInstance } from "./fetchApiService.js";

export const listProducts = async ({limit, page, search, category}) => {
  const skip = (page - 1) * limit;

  const results = await getInstance({
    path: `/products?limit=${limit || 10}&skip=${skip || 0}`,
  })

  const products = {
    page: page,
    limit: results.data.limit,
    total: results.data.total,
    data: results.data.products.map((item => (
      {
        id: item.id,
        name: item.title,
        price: item.price,
        stock: item.stock,
        rating: item.rating,
        thumbnail: item.thumbnail
      }
    )))
  }

  return products
}
