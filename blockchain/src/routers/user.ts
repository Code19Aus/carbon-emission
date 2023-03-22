// external imports
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// const { checkLogin } = require("../middleWares/common/checkLogin");

// internal imports
import User from '../models/User';
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middleWares/users/userValidators");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middleWares/login/loginValidators");


const router = express.Router();



// Register user
router.post(
  "/register",
  addUserValidators,
  addUserValidationHandler,
  async (req, res, next) => {
    let { email, password } = req.body;
    // console.log(email, password);
    const hashedPassword: any = await bcrypt.hash(password, 10);

    try {
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });

      const user = await newUser.save();//@ts-ignore
      const { password, ...info } = user._doc;
      return next({
        status: 201,
        message: info,
      });
    } catch (error) {
      next({
        status: 500,
        message: error.message,
      });
    }
  }
);

// Login
router.post(
  "/login",
  doLoginValidators,
  doLoginValidationHandler,
  async (req, res, next) => {
    let { email, password } = req.body;

    try {
      const user = await User.findOne({
        email: email,
      });
      if (!user) {
        return next({
          code: 401,
          message: "Email Address is not found",
        });
      }
      // console.log("user", user);

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        // prepare the user object to generate token
        //@ts-ignore
        const { password, ...info } = user._doc;
        // console.log(info);

        const token = await jwt.sign(info, process.env.JWT_SECRET || '', {
          expiresIn: process.env.JWT_EXPIRY,
        });

        next({
          status: 200,
          message: {
            token,
            ...info,
          },
        });
      } else {
        next({
          status: 401,
          message: "Authentication Failed!!!",
        });
      }
    } catch (error) {
      next({
        status: 500,
        message: error.message,
      });
    }
  }
);

export default router;
