import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
//import { authenticateToken } from '../middleware/auth.js';
//import geoRoute from './geoapify.js'

const router = Router();

router.use('/auth', authRoutes);

router.use('/api', 
    //authenticateToken, 
    apiRoutes);
//router.use('/geo', geoRoute)

export default router;
