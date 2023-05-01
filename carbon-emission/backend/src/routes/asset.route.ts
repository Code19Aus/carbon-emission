import express from 'express';
import { authUser } from '../middlewares/auth';
import { getAllAssets, postAddNewAsset } from '../controllers/asset.controller';

const router = express.Router();

router.get('/all', authUser, getAllAssets);
router.post('/', authUser, postAddNewAsset);

export default router;