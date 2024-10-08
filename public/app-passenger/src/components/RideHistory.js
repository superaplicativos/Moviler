// /app-passenger/src/components/RideHistory.js

import React from 'react';

function RideHistory() {
    const rides = [
        { id: 101, driver: 'João Silva', date: '15/08/2023', status: 'Concluída' },
        { id: 102, driver: 'Maria Souza', date: '14/08/2023', status: 'Cancelada' },
    ];

    return (
        <div className="ride-history">
            <h1>Histórico de Corridas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Motorista</th>
                        <th>Data</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rides.map((ride) => (
                        <tr key={ride.id}>
                            <td>{ride.id}</td>
                            <td>{ride.driver}</td>
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
