// /super-admin/src/controllers/PaymentController.js

const PaymentService = require('../services/PaymentService');

const PaymentController = {
    listPayments: async (req, res) => {
        try {
            const payments = await PaymentService.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar os pagamentos', error });
        }
    },

    getPaymentDetails: async (req, res) => {
        try {
            const payment = await PaymentService.getPaymentById(req.params.id);
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar detalhes do pagamento', error });
        }
    },
};

module.exports = PaymentController;
