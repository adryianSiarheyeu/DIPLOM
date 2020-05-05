const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res, next) => {
  const { companyName, email, password, address } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      companyName,
      email,
      password: hashedPassword,
      address,
    });

    const savedUser = await user.save();

    res.json({
      id: savedUser._id,
      company: savedUser.companyName,
      email: savedUser.email,
      address: savedUser.address,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const loginController = async (req, res, next) => {
  const { user } = req;
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("auth-token", token).json({
    id: user._id,
    company: user.companyName,
    email: user.email,
    address: user.address,
  });
};

module.exports = {
  registerController,
  loginController,
};
