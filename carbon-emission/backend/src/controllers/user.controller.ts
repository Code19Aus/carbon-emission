import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User";
import createUser from "../helpers/createUser";
import envOrDefault from "../utils/envOrDefault";


export const postRegisterUser = async (req: Request, res: Response, next: NextFunction) => {
    const { full_name, email, password } = req.body;
    try {
        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            throw new Error("User already exists");
        }
        // Hash the password
        const hashedPassword: any = await bcrypt.hash(password, 10);
        const newUser = new User({ full_name, email, password: hashedPassword });
        await newUser.save();

        // Create a new user in the blockchain
        await createUser(newUser._id.toString());

        return res.status(201).json({
            message: "User registered successfully"
        });
    } catch (error: any) {
        return next(createHttpError(error.message));
    }
};

export const postLoginUser = async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;
    try {
        const user = await User.findOne({
            email
        });

        if (!user) {
            throw new Error("email or password is incorrect");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error("email or password is incorrect");
        }

        const info = { ...user.toObject(), password: undefined };
        const token = jwt.sign({ userId: info._id }, envOrDefault('JWT_SECRET', ''), {
            expiresIn: envOrDefault('JWT_EXPIRY', '12h'),
        });

        return res.status(200).json({
            msg: "Login Success",
            token,
            data: info,
        });

    } catch (error: any) {
        return next(createHttpError(error.message));
    }
};

export const getAuthUser = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("Something wrong, please try later.");
        }
        return res.status(200).json({
            msg: "Authorized",
            data: {
                ...user.toObject(),
                password: undefined
            },
        });
    } catch (error: any) {
        return next(createHttpError(error.message));
    }
};