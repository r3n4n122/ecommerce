import AppError from "../errors/AppError.js"
import {
  listProducts,
  listUsers
} from "../services/testService.js"

export const testProducts = async (req, res, next) => {
  try{
    const products = await listProducts();

    res.status(200).json(
      products
    )
  }catch(error){
    next(error)
  }
}

export const testUsers = async (req, res, next) => {
  try{
    const users = await listUsers();

    res.status(200).json(
      users
    )
  }catch(error){
    next(error)
  }
}
