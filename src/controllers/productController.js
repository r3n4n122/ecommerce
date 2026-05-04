import AppError from "../errors/AppError.js";
import { listProducts } from "../services/ProductService.js";

export const indexProducts = async (req, res, next) => {
  try{
    const { limit, page, category, search } = req.query;

    const limitNum = limit ? Number(limit) : 10;
    const pageNum = page ? Number(page) : 1;
    
    if(limit > 20){
      throw new AppError("limit não pode ser maior que 20", 400)
    }

    if(pageNum  < 1){
      throw new AppError("page não pode ser menor que 1", 400)
    }
    
    const products = await listProducts({
      limit: limitNum, 
      page: pageNum,
      search: search || "",
      category: category || ""
    });

    return res.status(200).json(
      products
    )
  }catch(error){
    next(error);
  }
}