// /super-admin/src/components/RideOverview.js
import React from 'react';

function RideOverview() {
    const rides = [
        { id: 101, driver: 'Motorista A', passenger: 'Passageiro X', status: 'Concluída' },
        { id: 102, driver: 'Motorista B', passenger: 'Passageiro Y', status: 'Ativa' }
    ];

    return (
        <div className="rides-overview">
            <h1>Visão Geral das Corridas</h1>
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

export default RideOverview;
