import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import AuroraService from '../../service/auroraService.js';

const router = express.Router();

// POST request with lat and lon to retrieve aurora data
router.post('/', async (req, res) => {
  try {
    const { lat, lon } = req.body;

    if (lat === undefined || lon === undefined) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    // Llamar al servicio AuroraService para obtener los datos de `kp` y `date`
    const auroraData = await AuroraService.getAuroraDataForCoordinates(lat, lon);

    // Generar un ID único para la solicitud
    const requestId = uuidv4();

    // Devolver el `kp`, `date`, y `requestId` en la respuesta
    return res.json({
      requestId,
      kp: auroraData.kp,
      timestamp: auroraData.date,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to retrieve aurora data.' });
  }
});

export default router;