import express from 'express';
import { getAuroraData } from '../../controllers/aurora-controller';

const router = express.Router();

router.get('/aurora-data', getAuroraData);

export default router;
