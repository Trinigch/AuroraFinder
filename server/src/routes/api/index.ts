import { Router } from 'express';
import auroraRoutes from './aurora-routes.js';
import { userRouter } from './user-routes.js';

const router = Router();

router.use('/aurora', auroraRoutes);
router.use('/users', userRouter);

export default router;