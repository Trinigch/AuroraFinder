import axios from 'axios';

export const getAuroraData = async (req: Request, res: Response) => {
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