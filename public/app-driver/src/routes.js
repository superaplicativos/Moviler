// /app-driver/src/routes.js

const express = require('express');
const RideController = require('./controllers/RideController');
const EarningsController = require('./controllers/EarningsController');
const UserController = require('./controllers/UserController');
const AuthHelper = require('./helpers/AuthHelper');

const router = express.Router();

// Middleware de autenticação
router.use((req, res, next) => {
    const token = req.headers.authorization;
    const user = AuthHelper.verifyToken(token);
    if (!user) return res.status(401).json({ message: 'Autenticação falhou' });
    req.user = user;
    next();
});

// Rotas de corridas
router.post('/ride-accept', RideController.acceptRide);
router.post('/ride-decline', RideController.declineRide);
router.get('/ride-history', RideController.getRideHistory);

// Rotas de ganhos
router.get('/earnings', EarningsController.getEarnings);

// Rotas de perfil
router.get('/profile', UserController.getProfile);
router.post('/profile/update', UserController.updateProfile);

module.exports = router;
