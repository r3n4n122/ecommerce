import express from 'express'
import { 
  indexProducts, 
  indexCategories,
  showProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/categories', indexCategories)
router.get('/:id', showProduct)
router.get('/', indexProducts)

export default router;