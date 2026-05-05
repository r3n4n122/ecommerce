import { response } from "express"
import AppError from "../../errors/AppError.js"
import { getInstance } from "../fetchApiService.js"

export const findProduct = async ({id}) => {
  try{
    const response = await getInstance({
      path: `/products/${id}`
    })

    if(!response.data){
      throw new AppError("Produto não encontrado", 404) 
    }
    
    const price = response.data.price || 0.00
    const discountPercentage = response.data.discountPercentage || 0
    const finalPrice = price - (price * discountPercentage / 100)

    const product = {
      id: response.data.id,
      name: response.data.title,
      description: response.data.description,
      category: response.data.category,
      price: price,
      discountPercentage: discountPercentage,
      finalPrice: parseFloat(finalPrice.toFixed(2)),
      stock: response.data.stock,
      rating: response.data.rating,
      images: response.data.images,
      thumbnail: response.data.thumbnail
    }
    
    return product

  }catch(error){
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.status;
      if(status === 404){
        throw new AppError("Produto não encontrado", status);
      }
    }
    throw new AppError(error.message, error.status)
  }
}
