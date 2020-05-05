const router = require("express").Router();
const {
  registerController,
  loginController,
} = require("../controllers/authControllers/index");
const {
  isUserExistsMiddleware,
  isCredentialsValidMiddleware,
} = require("../middlewares/auth");

router.post("/register", isUserExistsMiddleware, registerController);

router.post("/login", isCredentialsValidMiddleware, loginController);

module.exports = router;
