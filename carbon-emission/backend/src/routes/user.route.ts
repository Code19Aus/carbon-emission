import express from 'express';

const router = express.Router();

import { postRegisterUser, postLoginUser, getAuthUser } from '../controllers/user.controller';
import { authUser } from '../middlewares/auth';

router.post('/register', postRegisterUser);
router.post('/login', postLoginUser);
router.get('/me', authUser, getAuthUser);

export default router;