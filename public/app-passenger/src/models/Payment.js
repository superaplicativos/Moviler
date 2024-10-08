// /app-passenger/src/models/Payment.js

class Payment {
    constructor(id, method, status, passengerId) {
        this.id = id;
        this.method = method;
        this.status = status;
        this.passengerId = passengerId;
    }

    static async getPaymentMethods(passengerId) {
        // Simulação de consulta ao banco de dados para obter métodos de pagamento
        return [
            new Payment(1, 'Cartão de Crédito', 'Ativo', passengerId),
            new Payment(2, 'PayPal', 'Ativo', passengerId),
        ];
    }

    static async updatePaymentMethod(passengerId, method) {
        // Simulação de atualização do método de pagamento
        return new Payment(Date.now(), method, 'Ativo', passengerId);
    }
}

module.exports = Payment;
