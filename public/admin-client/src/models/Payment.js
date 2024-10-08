// /admin-client/src/models/Payment.js

class Payment {
    constructor(id, amount, method, status) {
        this.id = id;
        this.amount = amount;
        this.method = method;
        this.status = status;
    }

    static async getPayments(clientId) {
        // Simulação de consulta ao banco de dados para listar pagamentos
        return [
            new Payment(201, 'R$ 50,00', 'Cartão', 'Pago'),
            new Payment(202, 'R$ 30,00', 'Dinheiro', 'Pendente')
        ];
    }

    static async getPaymentSettings(clientId) {
        // Simulação de consulta para obter as configurações de pagamento do cliente
        return {
            stripeKey: 'chave-xxxx-xxxx',
            commission: '10%'
        };
    }

    static async updatePaymentSettings(clientId, paymentSettings) {
        // Simulação de atualização das configurações de pagamento
        return {
            stripeKey: paymentSettings.stripeKey,
            commission: paymentSettings.commission
        };
    }
}

module.exports = Payment;
