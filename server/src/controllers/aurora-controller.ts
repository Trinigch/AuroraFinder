import axios from 'axios';
import { AURORAS_API_KEY } from '../config/config';

export const getAuroraData = async (req, res) => {
  try {
    const { lat, long } = req.query;

    const aurorasUrl = `http://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&ace=true&images=true&probability=true`;

    const response = await axios.get(aurorasUrl);

    res.json(response.data);

  } catch (error) {
    console.error('Error fetching aurora data:', error);
    res.status(500).json({ message: 'Error fetching aurora data' });
  }
};
