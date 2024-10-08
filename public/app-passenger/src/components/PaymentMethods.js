// /app-passenger/src/components/PaymentMethods.js

import React, { useState } from 'react';

function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState('credit-card');

    const savePaymentMethod = () => {
        // Lógica para salvar o método de pagamento
        console.log('Método de pagamento selecionado:', selectedMethod);
    };

    return (
        <div className="payment-methods">
            <h1>Métodos de Pagamento</h1>
            <label>Selecione o Método de Pagamento</label>
            <select value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
                <option value="credit-card">Cartão de Crédito</option>
                <option value="debit-card">Cartão de Débito</option>
                <option value="paypal">PayPal</option>
            </select>
            <button onClick={savePaymentMethod}>Salvar Método de Pagamento</button>
        </div>
    );
}

export default PaymentMethods;
