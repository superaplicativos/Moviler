// /api-gateway/src/services/StripeService.js

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

class StripeService {
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
                amount: amount * 100, // Valor em centavos
                currency: currency,
                customer: customerId,
            });
            return paymentIntent;
        } catch (error) {
            console.error('Erro ao processar pagamento no Stripe:', error);
            throw error;
        }
    }

    static async getCustomerPayments(customerId) {
        try {
            const payments = await stripe.paymentIntents.list({ customer: customerId });
            return payments.data;
        } catch (error) {
            console.error('Erro ao listar pagamentos do cliente no Stripe:', error);
            throw error;
        }
    }
}

module.exports = StripeService;
