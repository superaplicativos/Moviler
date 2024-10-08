// /api-gateway/src/routes/driverRoutes.js

const express = require('express');
const DriverController = require('../controllers/DriverController');

const router = express.Router();

// Rota para registrar um novo motorista
router.post('/register', DriverController.registerDriver);

// Rota para obter motoristas disponíveis
router.get('/available', DriverController.getAvailableDrivers);

// Rota para atualizar o status de um motorista
router.patch('/update-status', DriverController.updateDriverStatus);

module.exports = router;
