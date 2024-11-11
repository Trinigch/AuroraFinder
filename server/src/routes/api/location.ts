/*
temporary built
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();


router.get('/coordinates', async (req, res) => {
    const { location } = req.query;

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&key=${process.env.MAPS_API_KEY}`
        );

        const data = await response.json();

        if (data && data.predictions && data.predictions.length > 0) {
            const placeId = data.predictions[0].place_id;

            // Get the place details to retrieve exact coordinates
            const detailsResponse = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.MAPS_API_KEY}`
            );
            const details = await detailsResponse.json();

            if (details && details.result && details.result.geometry) {
                const { lat, lng } = details.result.geometry.location;
                res.json({ latitude: lat, longitude: lng });
            } else {
                res.status(404).json({ error: 'Coordinates not found' });
            }
        } else {
            res.status(404).json({ error: 'Location not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
*/