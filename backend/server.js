import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Inventory from './models/Inventory.js';
import Order from './models/Order.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedDatabase();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

async function seedDatabase() {
  const invCount = await Inventory.countDocuments();
  if (invCount === 0) {
    await Inventory.insertMany([
      { sku: 'GSP-101', name: 'HyperPulse 7.1 Wireless Gaming Headset', category: 'Audio & Peripherals', stock: 120, price: '$149.00', status: 'In Stock' },
      { sku: 'GSP-102', name: 'ApexPro Magnetic Hall-Effect Keyboard', category: 'Keyboards & Mice', stock: 16, price: '$189.00', status: 'Low Stock' },
      { sku: 'GSP-103', name: 'RTX 5080 Phantom OC 16GB GPU', category: 'PC Components', stock: 0, price: '$999.00', status: 'Out of Stock' },
      { sku: 'GSP-104', name: 'Vortex 240Hz OLED Gaming Monitor', category: 'Displays', stock: 85, price: '$549.00', status: 'In Stock' },
      { sku: 'GSP-105', name: 'TitanForge Reclining Gaming Chair', category: 'Gaming Furniture', stock: 34, price: '$329.00', status: 'In Stock' },
    ]);
  }

  const orderCount = await Order.countDocuments();
  if (orderCount === 0) {
    await Order.insertMany([
      { orderId: 'ORD-7041', name: 'ApexPro Hall-Effect Keyboard', stockValue: '$189K', quantity: 24, status: 'Delivered', date: '2026-03-13' },
      { orderId: 'ORD-7042', name: 'RTX 5080 Phantom OC Batch', stockValue: '$940K', quantity: 18, status: 'Cancelled', date: '2026-03-13' },
      { orderId: 'ORD-7043', name: 'HyperPulse Wireless Headset', stockValue: '$149K', quantity: 32, status: 'Delivered', date: '2026-03-12' },
      { orderId: 'ORD-7044', name: 'ShadowGlide 60g Esports Mouse', stockValue: '$95K', quantity: 45, status: 'Delivered', date: '2026-03-11' },
      { orderId: 'ORD-7045', name: 'Vortex 240Hz OLED Monitor', stockValue: '$275K', quantity: 9, status: 'Cancelled', date: '2026-03-10' },
    ]);
  }
}

app.get('/api/inventory', async (req, res) => {
  try {
    const items = await Inventory.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/inventory', async (req, res) => {
  try {
    const { sku, name, category, stock, price } = req.body;
    const status = stock === 0 ? 'Out of Stock' : stock <= 20 ? 'Low Stock' : 'In Stock';
    const newItem = await Inventory.create({ sku, name, category, stock, price, status });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/orders/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/orders/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));