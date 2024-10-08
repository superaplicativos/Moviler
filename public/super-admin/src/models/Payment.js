// /super-admin/src/models/Payment.js

class Payment {
    constructor(id, amount, method, status) {
        this.id = id;
        this.amount = amount;
        this.method = method;
        this.status = status;
    }

    static async getAllPayments() {
        // Exemplo de consulta ao banco de dados para obter todos os pagamentos
        return [
            new Payment(201, 'R$ 50,00', 'Cartão', 'Pago'),
            new Payment(202, 'R$ 30,00', 'Dinheiro', 'Pendente')
        ];
    }

    static async getPaymentById(id) {
        // Exemplo de consulta ao banco de dados para obter um pagamento por ID
        return new Payment(id, 'R$ 50,00', 'Cartão', 'Pago');
    }
}

module.exports = Payment;
