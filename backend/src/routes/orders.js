const router = require("express").Router();

const { verifyTokenMiddleware } = require("../middlewares/auth");
const {
  getUserOrders,
  createOrder,
} = require("../controllers/orderController/index");

router.get("/", verifyTokenMiddleware, getUserOrders);
router.post("/", verifyTokenMiddleware, createOrder);

module.exports = router;
