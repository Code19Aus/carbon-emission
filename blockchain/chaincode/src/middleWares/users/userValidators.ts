// external imports
import { check, validationResult } from "express-validator";
import createError from "http-errors";
import { Request, Response, NextFunction } from 'express';

// internal imports
import User from '../../models/User';

// add user
export const addUserValidators = [
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError("Email already is use!");
        }
      } catch (error) {
        throw createError(error);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
];

export const addUserValidationHandler = function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    console.log(Object.keys(mappedErrors));
    next();
  } else {
    return next({
      status: 500,
      message: mappedErrors,
    });
  }
};
