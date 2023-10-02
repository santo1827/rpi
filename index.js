const express = require('express');
const axios = require('axios');

const app = express();

app.get('/weather', async (req, res) => {
    try {
        const weatherApi = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-27.4679&longitude=153.0281&hourly=temperature_2m&current_weather=true&timezone=auto');
        const data = weatherApi.data;
        res.json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching weather data.' });
    }
});

app.listen(5000, () => console.log('Server listening on port 5000'));