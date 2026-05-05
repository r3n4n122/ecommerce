import express from 'express'
import { createCart } from '../controllers/cartController.js';
const router = express.Router();


router.put('/:id', () => {

})
router.post('/', createCart)
export default router;