import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";

export function checkLogin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET || '', (err, user) => {
      if (err) {
        console.log("This Token is not valid!");
        return next({
          status: 403,
          message: "This Token is not valid!",
        });
      }
      // console.log("verified");
      //@ts-ignore
      req.user = user;
      next();
    });
  } else {
    console.log("not verified");
    return next({
      status: 401,
      message: "You are not authenticated",
    });
  }
}