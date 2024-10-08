// /api-gateway/config.js

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'segredoJWT',
    stripeApiKey: process.env.STRIPE_API_KEY,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapboxApiKey: process.env.MAPBOX_API_KEY,
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/rideapp',
};
