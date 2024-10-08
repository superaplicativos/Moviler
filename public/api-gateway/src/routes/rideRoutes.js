// /api-gateway/src/routes/rideRoutes.js

const express = require('express');
const RideController = require('../controllers/RideController');

const router = express.Router();

// Rota para criar uma nova corrida
router.post('/create', RideController.createRide);

// Rota para obter o histórico de corridas de um usuário
router.get('/history/:userId', RideController.getRideHistory);

// Rota para atualizar o status de uma corrida
router.patch('/update-status', RideController.updateRideStatus);

module.exports = router;
