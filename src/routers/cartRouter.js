import express from 'express'
import { 
  createCart, 
  updateCart 
} from '../controllers/cartController.js';
const router = express.Router();


router.put('/:id', updateCart)
router.post('/', createCart)
export default router;