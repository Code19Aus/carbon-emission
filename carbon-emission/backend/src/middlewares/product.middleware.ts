import { check, param } from "express-validator";

export const postCreateProductValidator = [
    check('epc_id')
        .not()
        .isEmpty()
        .withMessage('EPC ID is required')
        .trim()
        .isLength({ min: 1 })
        .withMessage('EPC ID cannot be empty'),
];

export const getProductByIdValidator = [
    param('id')
        .trim()
        .isUUID('4')
        .withMessage('Invalid product ID')
];

export const postAddNewProductFlowValidator = [
    check('product_id')
        .not()
        .isEmpty()
        .withMessage('Product ID is required'),
    check('process_id')
        .not()
        .isEmpty()
        .withMessage('Process ID is required'),
    check('reader_id')
        .not()
        .isEmpty()
        .withMessage('Reader ID is required'),
    check('antenna_number')
        .not()
        .isEmpty()
        .withMessage('Antenna number is required')
];

export const putUpdateProductFlowValidator = [
    check('product_id')
        .not()
        .isEmpty()
        .withMessage('Product ID is required'),
    check('process_id')
        .not()
        .isEmpty()
        .withMessage('Process ID is required')
];
