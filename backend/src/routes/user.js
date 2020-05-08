const router = require("express").Router();

const { verifyTokenMiddleware } = require("../middlewares/auth");
const { getUser } = require("../controllers/userControllers/index");

router.get("/", verifyTokenMiddleware, getUser);

module.exports = router;
