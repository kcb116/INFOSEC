import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  stockValue: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Delivered', 'Cancelled'],
    default: 'Delivered'
  },
  date: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);