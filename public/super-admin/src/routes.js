// /super-admin/src/routes.js

const express = require('express');
const GlobalDashboardController = require('./controllers/GlobalDashboardController');
const ClientManagementController = require('./controllers/ClientManagementController');
const RideOverviewController = require('./controllers/RideOverviewController');
const PaymentController = require('./controllers/PaymentController');
const CommissionController = require('./controllers/CommissionController');

const router = express.Router();

// Rotas do dashboard
router.get('/dashboard', GlobalDashboardController.getDashboardMetrics);

// Rotas de clientes
router.get('/clients', ClientManagementController.listClients);
router.post('/clients', ClientManagementController.createClient);
router.put('/clients/:id', ClientManagementController.updateClient);
router.delete('/clients/:id', ClientManagementController.deleteClient);

// Rotas de corridas
router.get('/rides', RideOverviewController.listRides);
router.get('/rides/:id', RideOverviewController.getRideDetails);

// Rotas de pagamentos
router.get('/payments', PaymentController.listPayments);
router.get('/payments/:id', PaymentController.getPaymentDetails);

// Rotas de comissões
router.get('/commissions', CommissionController.getCommissionSettings);
router.put('/commissions', CommissionController.updateCommissionSettings);

module.exports = router;
