// /app-passenger/src/routes.js

const express = require('express');
const RideController = require('./controllers/RideController');
const PaymentController = require('./controllers/PaymentController');
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
router.post('/ride-booking', RideController.bookRide);
router.get('/ride-history', RideController.getRideHistory);

// Rotas de pagamentos
router.get('/payment-methods', PaymentController.getPaymentMethods);
router.post('/payment-methods/update', PaymentController.updatePaymentMethod);

// Rotas de perfil do usuário
router.get('/profile', UserController.getProfile);
router.post('/profile/update', UserController.updateProfile);

module.exports = router;
