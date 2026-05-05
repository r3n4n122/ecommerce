import { 
  postInstance, 
  putInstance 
} from "../services/fetchApiService.js"
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
    throw new AppError("Não foi possível salvar o carrinho", 400)
  }
  
  const productList = response.data.products
  const productsFormated = productList.map(p => ({
    productId: p.id,
    name: p.title,
    quantity: p.quantity,
    price: p.price,
    subtotal: Number((p.price * p.quantity).toFixed(2))
  }));

  const cart = {
    cartId: response.data.id,
    userId: response.data.userId,
    totalProducts: response.data.totalProducts,
    totalQuantity:  response.data.totalQuantity,
    totalPrice: response.data.total,
    products: productsFormated
  }

  return cart
}

export const editCart = async ({cartId, products}) => {
  try{
    const response = await putInstance({
      path: `/carts/${cartId}`,
      body: {
        products: products.map(item => ({
          id: item.productId,
          quantity: item.quantity
        }))
      }
    })

    if (!response.data){
      throw new AppError("Não foi possível atualizar o o carrinho", 400)
    }

    const productList = response.data.products
    const productsFormated = productList.map(p => ({
      productId: p.id,
      name: p.title,
      quantity: p.quantity,
      price: p.price,
      subtotal: Number((p.price * p.quantity).toFixed(2))
    }));

    const cart = {
      cartId: response.data.id,
      userId: response.data.userId,
      totalProducts: response.data.totalProducts,
      totalQuantity:  response.data.totalQuantity,
      totalPrice: response.data.total,
      products: productsFormated
    }

    return cart
  }catch(error){
    if(error.status === 404){
      throw new AppError("Carrinho não encontrado", 404)
    }
    throw new AppError(error.message, error.status)
  }
}
