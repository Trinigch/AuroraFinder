import { Router } from 'express';
import auroraRoutes from './aurora-routes.js';
import { userRouter } from './user-routes.js';
import geoapifyRouter from './geoapify.js';
import { historyRouter} from './historyRoutes.js'

const router = Router();

router.use('/aurora', auroraRoutes);
router.use('/users', userRouter);
router.use('/geoapify', geoapifyRouter)
router.use('/history',  historyRouter);

export default router;