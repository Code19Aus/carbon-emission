import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from "express-validator";

export const doLoginValidators = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password").isStrongPassword(),
];

export const doLoginValidationHandler = function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    return next({
      status: 500,
      message: mappedErrors,
    });
  }
};