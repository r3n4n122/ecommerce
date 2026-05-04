import express from 'express'
import { indexProducts } from '../controllers/productController.js';

const router = express.Router();
router.get('/', indexProducts)

export default router;