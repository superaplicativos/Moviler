// /admin-client/src/routes.js

const express = require('express');
const DashboardController = require('./controllers/DashboardController');
const DriverController = require('./controllers/DriverController');
const RideController = require('./controllers/RideController');
const PaymentController = require('./controllers/PaymentController');
const CommissionController = require('./controllers/CommissionController');
const RegionController = require('./controllers/RegionController');
const TariffController = require('./controllers/TariffController');
const PersonalizationController = require('./controllers/PersonalizationController');

const router = express.Router();

// Rotas do dashboard
router.get('/dashboard', DashboardController.getDashboardMetrics);

// Rotas de motoristas
router.get('/drivers', DriverController.listDrivers);
router.post('/drivers', DriverController.addDriver);
router.put('/drivers/:id', DriverController.updateDriver);

// Rotas de corridas
router.get('/rides', RideController.listRides);
router.get('/rides/:id', RideController.getRideDetails);

// Rotas de pagamentos
router.get('/payments', PaymentController.getPaymentSettings);
router.post('/payments/update', PaymentController.updatePaymentSettings);
router.get('/payments/history', PaymentController.listPayments);

// Rotas de comissões
router.get('/commissions', CommissionController.getCommissionSettings);
router.post('/commissions/update', CommissionController.updateCommissionSettings);

// Rotas de regiões
router.get('/regions', RegionController.listRegions);
router.post('/regions', RegionController.createRegion);
router.put('/regions/:id', RegionController.updateRegion);
router.delete('/regions/:id', RegionController.deleteRegion);

// Rotas de tarifas
router.get('/tariffs', TariffController.getTariffSettings);
router.post('/tariffs/update', TariffController.updateTariffSettings);

// Rotas de personalização
router.get('/personalization', PersonalizationController.getPersonalizationSettings);
router.post('/personalization/update', PersonalizationController.updatePersonalizationSettings);

module.exports = router;
