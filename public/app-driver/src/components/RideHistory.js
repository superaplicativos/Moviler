// /app-driver/src/components/RideHistory.js

import React, { useState } from 'react';

function RideHistory() {
    const [rideHistory, setRideHistory] = useState([
        { id: 401, passenger: 'Paulo Oliveira', date: '15/08/2023', status: 'Concluída' },
        { id: 402, passenger: 'Maria Souza', date: '14/08/2023', status: 'Cancelada' },
    ]);

    return (
        <div className="ride-history">
            <h1>Histórico de Corridas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Passageiro</th>
                        <th>Data</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rideHistory.map((ride) => (
                        <tr key={ride.id}>
                            <td>{ride.id}</td>
                            <td>{ride.passenger}</td>
                            <td>{ride.date}</td>
                            <td>{ride.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RideHistory;
