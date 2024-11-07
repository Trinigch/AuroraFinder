import express from 'express';
import { getAuroraData } from '../../controllers/aurora-controller.js';

const router = express.Router();

router.get('/aurora-data', getAuroraData);

export default router;
