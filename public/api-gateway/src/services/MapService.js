// /api-gateway/src/services/MapService.js

const axios = require('axios');

class MapService {
    static async getCoordinates(address, useGoogleMaps = true) {
        const apiKey = useGoogleMaps ? process.env.GOOGLE_MAPS_API_KEY : process.env.MAPBOX_API_KEY;
        const apiUrl = useGoogleMaps
            ? `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
            : `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            return useGoogleMaps ? response.data.results[0].geometry.location : response.data.features[0].geometry.coordinates;
        } catch (error) {
            console.error('Erro ao obter coordenadas:', error);
            throw error;
        }
    }

    static async calculateDistance(coord1, coord2, useGoogleMaps = true) {
        const apiKey = useGoogleMaps ? process.env.GOOGLE_MAPS_API_KEY : process.env.MAPBOX_API_KEY;
        const apiUrl = useGoogleMaps
            ? `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${coord1.lat},${coord1.lng}&destinations=${coord2.lat},${coord2.lng}&key=${apiKey}`
            : `https://api.mapbox.com/directions/v5/mapbox/driving/${coord1.lng},${coord1.lat};${coord2.lng},${coord2.lat}?access_token=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            return useGoogleMaps ? response.data.rows[0].elements[0].distance : response.data.routes[0].distance;
        } catch (error) {
            console.error('Erro ao calcular distância:', error);
            throw error;
        }
    }
}

module.exports = MapService;
