import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import getContract from "../helpers/getContract";

export const getAllAssets = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;

    try {
        const contract = await getContract(userId);
        const result = await contract.evaluateTransaction('GetAllAssets');

        res.status(200).json({
            message: "Get all assets successfully!",
            data: JSON.parse(result.toString())
        });
    } catch (error: any) {
        return next(createHttpError(error.message));
    };
};

export const postAddNewAsset = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { id, color, size, owner, appraised_value } = req.body;

    try {
        const contract = await getContract(userId);
        await contract.submitTransaction('CreateAsset', id, color, size, owner, appraised_value);
        res.status(201).json({
            msg: "Create asset successfully!",
        })
    } catch (error: any) {
        return next(createHttpError(error.message));
    };
};