import express from 'express';
import { getOrders, placeOrder } from '../controllers/orderController.js';

const router = express.Router();
router.get('/', getOrders);
router.post('/', placeOrder);

export default router;
