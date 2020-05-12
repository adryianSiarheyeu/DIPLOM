const User = require("../../models/User");
const Order = require("../../models/Order");

const getUser = async (req, res, next) => {
  const { userId } = req;
  try {
    const foundUser = await User.findById(userId);
    const userOrders = await Order.find({ customerId: userId });

    const { _id, companyName, email, address } = foundUser;

    res.json({ _id, companyName, email, address, orders: userOrders });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
};
