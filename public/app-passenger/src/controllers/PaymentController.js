// /app-passenger/src/controllers/PaymentController.js

const PaymentService = require('../services/PaymentService');

class PaymentController {
    static async getPaymentMethods(req, res) {
        try {
            const methods = await PaymentService.getPaymentMethods(req.user.id);
            res.status(200).json(methods);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao obter métodos de pagamento', error });
        }
    }

    static async updatePaymentMethod(req, res) {
        const { method } = req.body;
        try {
            const updatedMethod = await PaymentService.updatePaymentMethod(req.user.id, method);
            res.status(200).json(updatedMethod);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar método de pagamento', error });
        }
    }
}

module.exports = PaymentController;
