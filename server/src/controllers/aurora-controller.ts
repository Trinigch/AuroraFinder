import axios from 'axios';
import { Request, Response } from 'express';

export const getAuroraData = async (req: Request, res: Response) => {
  try {
    // Extract lat/long and ensure they are interpreted as numbers
    const lat = parseFloat(req.query.lat as string);
    const long = parseFloat(req.query.long as string);

    if (isNaN(lat) || isNaN(long)) {
      return res.status(400).json({ message: 'Invalid latitude or longitude' });
    }

    const aurorasUrl = `https://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&forecast=false&threeday=false&images=true`;
    //const aurorasUrl = `http://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&ace=true&images=true&probability=true`;

    const response = await axios.get<any>(aurorasUrl);
    console.log(response);
    res.json(response.data);

    return;

  } catch (error) {
    console.error('Error fetching aurora data:', error);
    res.status(500).json({ message: 'Error fetching aurora data' });

    return;
  }
};
