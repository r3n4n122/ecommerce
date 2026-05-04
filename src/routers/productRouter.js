import express from 'express'
import { 
  indexProducts, 
  indexCategories 
} from '../controllers/productController.js';

const router = express.Router();
router.get('/categories', indexCategories)
router.get('/', indexProducts)

export default router;