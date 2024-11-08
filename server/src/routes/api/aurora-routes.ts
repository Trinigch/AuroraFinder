import express from 'express';
import AuroraService from '../../service/auroraService.js';

const router = express.Router();

router.post('/aurora-data', async (req, res) => {
  try {
    const { lat, lon } = req.body;
    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    const auroraData = await AuroraService.getAuroraDataForCoordinates(lat, lon);
    return res.json(auroraData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to retrieve aurora data.' });
  }
});

export default router;