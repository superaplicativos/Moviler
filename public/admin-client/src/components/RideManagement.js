// /admin-client/src/components/RideManagement.js
import React from 'react';

function RideManagement() {
    const rides = [
        { id: 101, driver: 'João Silva', passenger: 'Paulo Oliveira', status: 'Ativa' },
        { id: 102, driver: 'Maria Souza', passenger: 'Ana Costa', status: 'Concluída' }
    ];

    return (
        <div className="rides">
            <h1>Gestão de Corridas</h1>
            <table className="rides-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Motorista</th>
                        <th>Passageiro</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rides.map((ride) => (
                        <tr key={ride.id}>
                            <td>{ride.id}</td>
                            <td>{ride.driver}</td>
                            <td>{ride.passenger}</td>
                            <td>{ride.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RideManagement;
