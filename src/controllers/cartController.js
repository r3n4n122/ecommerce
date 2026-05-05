import AppError from "../errors/AppError.js"
import { addCart, editCart } from "../services/cartService.js";
import { 
  validationCreateCart,
  validationUpdateCart
} from "../schema/cartSchema.js"

export const createCart = async (req, res, next)  => {
  try{
    const validation = validationCreateCart(req.body)
    
    if(!validation.success){
      const firstError = validation.error.issues[0].message;
      throw new AppError(firstError, 400);
    }
    
    const userId = req.body.userId  
    const products = req.body.products

    const cart = await addCart({
      userId: userId,
      products: products
    });

    res.status(201).json(
      cart
    )
  }catch(error){
    next(error);
  }
}

export const updateCart = async (req, res, next) => {
  try {

    const validation = validationUpdateCart(req.body);
    
    if (!validation.success) {
      const firstError = validation.error.issues[0].message;
      throw new AppError(firstError, 400);
    }

    const { id: cartId } = req.params;
    const { products } = req.body;

    const cart = await editCart({ cartId, products });

    return res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};