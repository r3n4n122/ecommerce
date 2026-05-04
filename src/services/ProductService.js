import { getInstance } from "./fetchApiService.js";

export const listProducts = async ({limit, page, search, category}) => {
  const skip = (page - 1) * limit;

  let path = ''

  if(search){
    path = `/products/search?q=${search}&limit=${limit || 10}&skip=${skip || 0}`
  }else if(category){
    path = `/products/category/${category}?limit=${limit || 10}&skip=${skip || 0}`
    console.log(path)
  }else{
    path = `/products?limit=${limit || 10}&skip=${skip || 0}`
  }

  const results = await getInstance({
    path: path,
  })

  const products = {
    page: page,
    limit: results.data.limit,
    total: results.data.total,
    data: (results.data.products || []).map((item => (
      {
        id: item.id,
        name: item.title,
        category: item.category,
        price: item.price,
        stock: item.stock,
        rating: item.rating,
        thumbnail: item.thumbnail
      }
    )))
  }

  return products
}