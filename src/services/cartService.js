import { postInstance } from "../services/fetchApiService.js"
import AppError from "../errors/AppError.js";
import { z } from "zod";

export const addCart = async ({userId, products}) => {
  const response = await postInstance({
    path: '/carts/add',
    body: {
      userId: userId,
      products: products.map(item => ({
        id: item.productId,
        quantity: item.quantity
      }))
    }
  })

  if (!response.data){
    throw new AppError("Não foi possível salvar o carrinho")
  }
  
  const productList = response.data.products
  let totalQuantity = 0
  let totalPrice = 0.0
  let productsFormated = []

  productList.forEach((product) => {
    totalQuantity += product.quantity 
    totalPrice += (product.price * product.quantity)
    
    productsFormated.push({
      productId: product.id,
      name: product.title,
      quantity: product.quantity,
      price: product.price,
      subtotal: parseFloat((product.price * product.quantity).toFixed(2))
    })
  })


  const card = {
    cardId: response.data.id,
    userId: userId,
    totalProducts: productsFormated.length,
    totalQuantity: totalQuantity,
    totalPrice: parseFloat(totalPrice.toFixed(2)),
    products: productsFormated
  }

  return card
}

export const validationData = (data) => {
  const validation = z.object({
    userId: z.number({
      required_error: "userId é obrigatório",
      invalid_type_error: "userId deve ser um número"
    }).int().positive(),
    products: z.array(
      z.object({
        productId: z.number().int().positive(),
        quantity: z.number().int().min(1, "A quantidade deve ser no mínimo 1")
      }),
      { required_error: "products é obrigatório" }
    ).min(1)
  })

  return validation.safeParse(data) 
}