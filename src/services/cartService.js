import { postInstance } from "../services/fetchApiService.js"
import AppError from "../errors/AppError.js";

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
  
  const productsFormated = productList.map(p => ({
    productId: p.id,
    name: p.title,
    quantity: p.quantity,
    price: p.price,
    subtotal: Number((p.price * p.quantity).toFixed(2))
  }));


  const card = {
    cardId: response.data.id,
    userId: userId,
    totalProducts: productsFormated.length,
    totalQuantity:  productsFormated.reduce((sum, p) => sum + p.quantity, 0),
    totalPrice: Number(productsFormated.reduce((sum, p) => sum + p.subtotal, 0).toFixed(2)),
    products: productsFormated
  }

  return card
}