import express from 'express'
import { 
  createCart, 
  updateCard 
} from '../controllers/cartController.js';
const router = express.Router();


router.put('/:id', updateCard)
router.post('/', createCart)
export default router;