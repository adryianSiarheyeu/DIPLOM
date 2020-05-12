const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  deliveryAddress: {
    type: String,
    required: true,
    trim: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    trim: true,
  },
  goods: {
    type: [Object],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
