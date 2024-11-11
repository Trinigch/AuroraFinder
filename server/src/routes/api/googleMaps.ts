import express from 'express';

const router = express.Router();

router.get('/maps', (_req, res) => {
    const apiKey = process.env.MAPS_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Google Maps API key not configured' });
    }

    // Send only the Google Maps script URL as JavaScript
    res.set('Content-Type', 'application/javascript');
    res.send(`src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places"`);
    return;
});

export default router;
