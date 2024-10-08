// /super-admin/src/components/PaymentTable.js
import React from 'react';

function PaymentTable() {
    const payments = [
        { id: 201, amount: 'R$ 50,00', method: 'Cartão', status: 'Pago' },
        { id: 202, amount: 'R$ 30,00', method: 'Dinheiro', status: 'Pendente' }
    ];

    return (
        <div className="payments">
            <h1>Transações de Pagamento</h1>
            <table className="payments-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Valor</th>
                        <th>Método</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.method}</td>
                            <td>{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PaymentTable;
