const Order = require("../../models/Order");

const getUserOrders = async (req, res, next) => {
  try {
    const userOrders = await Order.find({ customerId: req.userId });

    res.json(userOrders);
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (req, res, next) => {
  const { address, goods, paymentMethod, totalPrice } = req.body;
  try {
    const orderToCreate = new Order({
      customerId: req.userId,
      deliveryAddress: address,
      goods,
      paymentMethod,
      totalPrice,
    });
    const createdOrder = await orderToCreate.save();

    res.json(createdOrder);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserOrders,
  createOrder,
};
