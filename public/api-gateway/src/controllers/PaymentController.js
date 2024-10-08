// /api-gateway/src/controllers/PaymentController.js

const PaymentService = require('../services/PaymentService');

class PaymentController {
    static async createPayment(req, res) {
        const { amount, currency, customerId } = req.body;

        try {
            const paymentIntent = await PaymentService.chargeCustomer(customerId, amount, currency);
            return res.status(201).json(paymentIntent);
        } catch (error) {
            console.error('Erro ao processar pagamento:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async getPayments(req, res) {
        const { customerId } = req.params;

        try {
            const payments = await PaymentService.getCustomerPayments(customerId);
            return res.status(200).json(payments);
        } catch (error) {
            console.error('Erro ao buscar pagamentos:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }
}

module.exports = PaymentController;
