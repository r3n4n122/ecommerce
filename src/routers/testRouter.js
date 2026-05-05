import express from 'express'
import { 
  testProducts, 
  testUsers 
} from '../controllers/testController.js'

const router = express.Router();

router.get('/products', testProducts)
router.get('/users', testUsers)
export default router;