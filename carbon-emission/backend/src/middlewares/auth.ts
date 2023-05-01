import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import envOrDefault from "../utils/envOrDefault";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    try {
        if (!token) {
            throw new Error("Unauthorized");
        }
        const decoded = jwt.verify(token, envOrDefault('JWT_SECRET', ''));
        // @ts-ignore
        req.user = decoded;
        next();
    } catch (error: any) {
        return next(createHttpError(401, "Unauthorized"));
    }
};