// /app-passenger/src/components/RideBooking.js

import React, { useState } from 'react';

function RideBooking() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [rideType, setRideType] = useState('standard');

    const handleBooking = () => {
        // Lógica para agendar a corrida
        console.log('Agendando corrida de:', pickup, 'para:', destination, 'Tipo:', rideType);
    };

    return (
        <div className="ride-booking">
            <h1>Agendar Corrida</h1>
            <label>Ponto de Partida</label>
            <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Digite o endereço de partida..."
            />

            <label>Destino</label>
            <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Digite o endereço de destino..."
            />

            <label>Tipo de Corrida</label>
            <select value={rideType} onChange={(e) => setRideType(e.target.value)}>
                <option value="standard">Padrão</option>
                <option value="premium">Premium</option>
                <option value="moto">Moto</option>
            </select>

            <button onClick={handleBooking}>Agendar Corrida</button>
        </div>
    );
}

export default RideBooking;
