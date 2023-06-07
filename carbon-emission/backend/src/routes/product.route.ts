import express from "express";
import { getAllProducts, getProductById, postCreateProduct, patchUpdateProductStatusAsComplete, postAddNewProductFlow, putUpdateProductFlow, getAProductFlow } from '../controllers/product.controller';
import { authUser } from '../middlewares/auth';
import { getProductByIdValidator, postAddNewProductFlowValidator, postCreateProductValidator, putUpdateProductFlowValidator } from '../middlewares/product.middleware';
import { validatorHandler } from '../middlewares/common/errorHandler';

const router = express.Router();

router.post('/', authUser, postCreateProductValidator, validatorHandler, postCreateProduct);
router.get('/', authUser, getAllProducts);
router.patch('/complete/:id', authUser, getProductByIdValidator, validatorHandler, patchUpdateProductStatusAsComplete);
router.post('/flow/in', authUser, postAddNewProductFlowValidator, validatorHandler, postAddNewProductFlow);
router.put('/flow/out', authUser, putUpdateProductFlowValidator, validatorHandler, putUpdateProductFlow);
router.get('/flow/:id', authUser, getProductByIdValidator, validatorHandler, getAProductFlow);
router.get('/:id', authUser, getProductByIdValidator, validatorHandler, getProductById);

export default router;