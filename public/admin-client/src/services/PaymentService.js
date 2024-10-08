// /admin-client/src/services/PaymentService.js

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

class PaymentService {
    static async createCustomer(customerData) {
        try {
            const customer = await stripe.customers.create(customerData);
            return customer;
        } catch (error) {
            console.error('Erro ao criar cliente no Stripe:', error);
            throw error;
        }
    }

    static async chargeCustomer(customerId, amount, currency = 'BRL') {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Stripe trabalha com valores em centavos
                currency: currency,
                customer: customerId,
            });
            return paymentIntent;
        } catch (error) {
            console.error('Erro ao processar pagamento:', error);
            throw error;
        }
    }

    static async getCustomerPayments(customerId) {
        try {
            const charges = await stripe.charges.list({ customer: customerId });
            return charges.data;
        } catch (error) {
            console.error('Erro ao listar pagamentos do cliente:', error);
            throw error;
        }
    }
}

module.exports = PaymentService;
