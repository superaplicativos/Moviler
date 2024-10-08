// /app-passenger/src/components/Navbar.js

import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#" id="ride-booking-link">Agendar Corrida</a></li>
                <li><a href="#" id="ride-history-link">Histórico de Corridas</a></li>
                <li><a href="#" id="profile-link">Perfil</a></li>
                <li><a href="#" id="payment-methods-link">Métodos de Pagamento</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
