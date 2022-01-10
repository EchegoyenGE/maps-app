import axios from 'axios';

const directionsAPI = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZ2FzdHkwNjciLCJhIjoiY2t5MW4zaHVoMGNtaDJyb2R6NDVkMXNweCJ9.pvOSIBVNeNeBKHZbtzcqTg'
    }
});

export default directionsAPI;