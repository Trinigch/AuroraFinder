import { Router } from 'express';
import auroraRoutes from './aurora-routes.js';
import { userRouter } from './user-routes.js';
import geoapifyRouter from './geoapify.js';

const router = Router();

router.use('/aurora', auroraRoutes);
router.use('/users', userRouter);
router.use('/geoapify', geoapifyRouter)

export default router;