const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.Private_key);
        console.log(decoded);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Please Login again");
    }
  } else {
    throw new Error(" There is no token attached to this user");
  }
});
exports.isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
//   console.log(req.user);
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});
