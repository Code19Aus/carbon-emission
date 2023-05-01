import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import createError from "http-errors";

// 404 not found handler
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const er = createError(404, 'url not found', {
        errors: {
            url: {
                msg: "request url not found"
            }
        }
    });
    next(er);
}

// default error handler
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status || 500).json({
        msg: err.message || "Internal server error",
        errors: err.errors || undefined
    })
}

export const validatorHandler = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        next();
    } else {
        const mappedErrors = errors.mapped();
        const err = createError(406, 'validation failed', {
            errors: mappedErrors
        });
        next(err);
    }
}