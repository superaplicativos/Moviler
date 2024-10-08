// /admin-client/src/config.js

module.exports = {
    appName: 'Painel do Cliente',
    defaultCommission: '10%',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapboxApiKey: process.env.MAPBOX_API_KEY,
    stripeApiKey: process.env.STRIPE_API_KEY,
    jwtSecret: process.env.JWT_SECRET,
};
