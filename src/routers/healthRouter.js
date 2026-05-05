import express from 'express'
import { healthIndex } from '../controllers/healthController.js'

const router = express.Router();

router.get('/', healthIndex)

export default router;