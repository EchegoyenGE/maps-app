import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ2FzdHkwNjciLCJhIjoiY2t5MW4zaHVoMGNtaDJyb2R6NDVkMXNweCJ9.pvOSIBVNeNeBKHZbtzcqTg'
    }
});

export default searchApi;