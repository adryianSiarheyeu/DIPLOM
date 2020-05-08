const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

module.exports = {
  isUserExistsMiddleware: async (req, res, next) => {
    const { email } = req.body;
    try {
      const emailExist = await User.findOne({ email });

      if (emailExist)
        return res
          .status(404)
          .json({ message: "User with this email is already exists" });

      next();
    } catch (error) {
      console.log(error);
    }
  },
  isCredentialsValidMiddleware: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user)
        return res
          .status(404)
          .json({ message: "Email or password is incorrect!" });

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid)
        return res
          .status(404)
          .json({ message: "Email or password is incorrect!" });

      req.user = user;

      next();
    } catch (error) {
      console.log(error);
    }
  },
  verifyTokenMiddleware: (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      req.userId = user._id;
      next();
    });
  },
};
