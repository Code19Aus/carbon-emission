import { Request, Response, NextFunction } from 'express';
import createError from "http-errors";

// 404 not found handler
export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  next(createError(404, "Your requested content was not found!"));
};

// default error handler
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.status || 500).json({
    msg: err.message || "Internal server error",
    errors: err.errors || undefined
  })
}