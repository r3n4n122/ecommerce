import AppError from "../errors/AppError.js"
import { addCart } from "../services/cartService.js";
import { validationData } from "../sechams/cartSchema.js"

export const createCart = async (req, res, next)  => {
  try{
    const userId = req.body.userId  
    const products = req.body.products
    const validation = validationData(req.body)

    if(!validation.success){
      const firstError = validation.error.issues[0].message;
      throw new AppError(firstError, 400);
    }

    const response = await addCart({
      userId: userId,
      products: products
    });

    res.status(201).json(
      response
    )
  }catch(error){
    next(error);
  }
}

export const updateCard = async (req, res, next)  => {
  try{

  }catch(error){
    next(error);
  }
}