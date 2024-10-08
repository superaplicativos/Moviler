// /admin-client/src/controllers/PaymentController.js

const PaymentService = require('../services/PaymentService');

const PaymentController = {
    getPaymentSettings: async (req, res) => {
        try {
            const settings = await PaymentService.getPaymentSettings(req.user.id);
            res.status(200).json(settings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar configurações de pagamento', error });
        }
    },

    updatePaymentSettings: async (req, res) => {
        try {
            const updatedSettings = await PaymentService.updatePaymentSettings(req.user.id, req.body);
            res.status(200).json(updatedSettings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar configurações de pagamento', error });
        }
    },

    listPayments: async (req, res) => {
        try {
            const payments = await PaymentService.getPayments(req.user.id);
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar pagamentos', error });
        }
    },
};

module.exports = PaymentController;
