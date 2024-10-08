// /api-gateway/src/routes/paymentRoutes.js

const express = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = express.Router();

// Rota para criar um novo pagamento
router.post('/create', PaymentController.createPayment);

// Rota para obter pagamentos de um cliente específico
router.get('/customer/:customerId', PaymentController.getPayments);

module.exports = router;
