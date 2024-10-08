// /app-driver/src/components/Earnings.js

import React, { useState } from 'react';

function Earnings() {
    const [earnings, setEarnings] = useState([
        { date: '15/08/2023', amount: 'R$ 200,00', status: 'Pago' },
        { date: '14/08/2023', amount: 'R$ 150,00', status: 'Pago' },
    ]);

    return (
        <div className="earnings">
            <h1>Seus Ganhos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {earnings.map((earning, index) => (
                        <tr key={index}>
                            <td>{earning.date}</td>
                            <td>{earning.amount}</td>
                            <td>{earning.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Earnings;
