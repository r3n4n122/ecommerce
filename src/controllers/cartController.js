import AppError from "../errors/AppError.js"
import { addCart, validationData } from "../services/cartService.js";

export const createCart = async (req, res, next)  => {
  try{
    const userId = req.body.userId  
    const products = req.body.products
    const validation = validationData(req.body)

    if(!validation.success){
      const errors = validation.error.issues;

      
      const hasParamError = errors.some(error => (
        (error.path.includes("userId") && error.code === "invalid_type" || error.path.includes("products") && error.code === "invalid_type"
      )))

      if(hasParamError){
        throw new AppError("`userId` ou `products` ausentes", 400)
      }

      const isProductInvalid = errors.some(error => 
        error.path.includes('products') && 
        error.code === "too_small" && 
        error.type === "array" &&
        error.minimum === 1 ||
        error.message === "A quantidade deve ser no mínimo 1"
      );

      if(isProductInvalid){
        throw new AppError("`products` vazio ou com `quantity < 1`", 400)
      }
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

