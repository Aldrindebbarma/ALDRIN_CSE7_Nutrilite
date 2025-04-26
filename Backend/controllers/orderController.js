import { Order } from '../models/index.js';

export const placeOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};
