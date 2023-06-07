import { Request, Response, NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Product, ProductFlow } from '../models/Product';
import getContract from '../helpers/getContract';

export const postCreateProduct = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { epc_id }: { epc_id: string } = req.body;

    const product: Product = {
        id: uuidV4(),
        epc_id,
        status: "processing",
    };
    const contract = await getContract(userId);
    await contract.submitTransaction('CreateProduct', product.id, product.epc_id);

    return res.status(200).json({
        msg: "Create product successfully!",
        data: product
    });
};

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;

    try {
        const contract = await getContract(userId);
        const result = await contract.evaluateTransaction('GetAllProducts');

        res.status(200).json({
            msg: "Get all products successfully!",
            data: JSON.parse(result.toString())
        });
    } catch (error: any) {
        return next(error);
    };
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { id } = req.params;

    try {
        const contract = await getContract(userId);
        const result = await contract.evaluateTransaction('ReadProduct', id);

        res.status(200).json({
            msg: "Get product by id successfully!",
            data: JSON.parse(result.toString())
        });
    } catch (error: any) {
        return next(error);
    };
};

export const patchUpdateProductStatusAsComplete = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { id } = req.params;

    try {
        const contract = await getContract(userId);
        await contract.submitTransaction('UpdateProductStatusAsComplete', id);

        res.status(200).json({
            msg: "Update product status as complete successfully!",
        });
    } catch (error: any) {
        return next(error);
    };
};

export const postAddNewProductFlow = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { product_id, process_id, reader_id, antenna_number }: { product_id: string, process_id: string, reader_id: string, antenna_number: string } = req.body;
    try {
        const contract = await getContract(userId);
        const product = await contract.evaluateTransaction('ReadProduct', product_id);
        const productData: Product = JSON.parse(product.toString());

        const productFlow: ProductFlow = {
            id: uuidV4(),
            product_id,
            epc_id: productData.epc_id,
            process_id,
            reader_id,
            antenna_number,
            start_time: new Date().toISOString(),
        };

        await contract.submitTransaction('CreateProductFlow', productFlow.id, productFlow.product_id, productFlow.epc_id, productFlow.process_id, productFlow.reader_id, productFlow.antenna_number, productFlow.start_time, "");

        return res.status(200).json({
            msg: "Add new product flow successfully!",
            data: productFlow
        });
    } catch (error: any) {
        return next(error);
    }
};

export const putUpdateProductFlow = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { product_id, process_id }: { product_id: string, process_id: string } = req.body;

    try {
        const contract = await getContract(userId);
        const query = {
            selector: {
                product_id,
                process_id
            }
        };

        const productFlow = await contract.evaluateTransaction('GetProductsFlowByQuery', JSON.stringify(query));
        const productFlowDataList: ProductFlow[] = JSON.parse(productFlow.toString()).map((item: any) => item.Record);

        if (!productFlowDataList.length) {
            throw new Error("Product flow not found!");
        }

        const productFlowUpdateData: ProductFlow = {
            ...productFlowDataList[0],
            end_time: new Date().toISOString()
        };

        await contract.submitTransaction('UpdateProductFlow', productFlowDataList[0].id, JSON.stringify(productFlowUpdateData));

        return res.status(200).json({
            msg: "Update product flow successfully!",
            data: productFlowUpdateData
        });

    } catch (error) {
        next(error);
    }
};

export const getAProductFlow = async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const userId: string = req.user.userId;
    const { id: productId } = req.params;

    try {
        const contract = await getContract(userId);
        const query = {
            selector: {
                product_id: productId
            }
        };
        const productFlow = await contract.evaluateTransaction('GetProductsFlowByQuery', JSON.stringify(query));
        const productFlowDataList: ProductFlow[] = JSON.parse(productFlow.toString()).map((item: any) => item.Record);

        res.status(200).json({
            msg: "Get all products flow successfully!",
            data: productFlowDataList
        });
    } catch (error: any) {
        return next(error);
    };
};