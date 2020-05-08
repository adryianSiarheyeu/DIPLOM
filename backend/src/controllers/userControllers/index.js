const User = require("../../models/User");

const getUser = async (req, res, next) => {
  const { userId } = req;
  try {
    const foundUser = await User.findById(userId);

    const { _id, companyName, email, address } = foundUser;

    res.json({ _id, companyName, email, address });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
};
