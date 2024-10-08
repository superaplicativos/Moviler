// /app-passenger/src/config.js

module.exports = {
    appName: 'App de Mobilidade - Passageiro',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapboxApiKey: process.env.MAPBOX_API_KEY,
    stripeApiKey: process.env.STRIPE_API_KEY,
    jwtSecret: process.env.JWT_SECRET,
};
