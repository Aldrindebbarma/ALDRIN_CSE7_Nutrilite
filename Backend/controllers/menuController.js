import { MenuItem } from '../models/index.js';

export const getMenu = async (req, res) => {
  const menu = await MenuItem.findAll();
  res.json(menu);
};

export const addMenuItem = async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
};
