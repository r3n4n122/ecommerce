import AppError from "../errors/AppError.js";
import { 
  listProducts, 
  listCategories,
  findProduct
} from "../services/products/index.js";
import { productQuerySchema } from "../schema/productSchema.js";

export const indexProducts = async (req, res, next) => {
  try {
    const validation = productQuerySchema.safeParse(req.query);

    if (!validation.success) {
      const issue = validation.error.issues[0];
      let message = "Parâmetros de consulta inválidos";

      if (issue.code === "too_big") message = "limit não pode ser maior que 20";
      if (issue.code === "too_small" && issue.path[0] === "page") message = "page não pode ser menor que 1";

      throw new AppError(message, 400);
    }

    const { limit, page, category, search } = validation.data;

    const products = await listProducts({
      limit,
      page,
      search,
      category
    });

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const indexCategories = async (req, res, next) => {
  try {
    const categories = await listCategories();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const showProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const numId = Number(id);

    if (!Number.isInteger(numId)) {
      throw new AppError("ID inválido (não númerico)", 400);
    }

    const product = await findProduct({ id: numId });

    const { price, discountPercentage } = product;
    const discountAmount = (price * discountPercentage) / 100;
    const finalPrice = parseFloat((price - discountAmount).toFixed(2));

    return res.status(200).json({
      ...product,
      finalPrice
    });
  } catch (error) {
    next(error);
  }
};
