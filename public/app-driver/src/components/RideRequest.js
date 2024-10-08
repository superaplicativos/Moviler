// /app-driver/src/components/RideRequest.js

import React, { useState } from 'react';

function RideRequest() {
    const [rideRequests, setRideRequests] = useState([
        { id: 301, pickup: 'Rua A', destination: 'Rua B', type: 'Padrão' },
        { id: 302, pickup: 'Rua C', destination: 'Rua D', type: 'Premium' },
    ]);

    const handleAccept = (rideId) => {
        // Lógica para aceitar a corrida
        console.log('Corrida aceita:', rideId);
    };

    const handleDecline = (rideId) => {
        // Lógica para recusar a corrida
        console.log('Corrida recusada:', rideId);
    };

    return (
        <div className="ride-requests">
            <h1>Solicitações de Corridas</h1>
            {rideRequests.map((ride) => (
                <div key={ride.id}>
                    <p>Partida: {ride.pickup}</p>
                    <p>Destino: {ride.destination}</p>
                    <p>Tipo: {ride.type}</p>
                    <button onClick={() => handleAccept(ride.id)}>Aceitar</button>
                    <button onClick={() => handleDecline(ride.id)}>Recusar</button>
                </div>
            ))}
        </div>
    );
}

export default RideRequest;
