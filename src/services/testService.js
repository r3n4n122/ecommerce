import AppError from "../errors/AppError.js"
import { getInstance } from "../services/fetchApiService.js"

export const listProducts = async () => {
  const response = await getInstance({
    path: "/products"
  })

  if(!response.data){
    throw new AppError("Dados não encontratos", 404)
  }
  
  const products = {
    total: response.data.total,
    data: response.data.products.map(p => ({
      id: p.id,
      name: p.title,
      price: parseFloat(p.price.toFixed(2))
    }))
  }

  return products
}

export const listUsers = async () => {
  const response = await getInstance({
    path: "/users"
  })

  if(!response.data){
    throw new AppError("Dados não encontratos", 404)
  }
  
  const users = response.data.users.map(user => ({
    id:  user.id,
    username: user.username,
    password: user.password
  }))

  return users
}