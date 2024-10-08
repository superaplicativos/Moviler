// /app-driver/src/components/Navbar.js

import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#" id="ride-requests-link">Solicitações de Corridas</a></li>
                <li><a href="#" id="ride-history-link">Histórico de Corridas</a></li>
                <li><a href="#" id="earnings-link">Ganhos</a></li>
                <li><a href="#" id="profile-link">Perfil</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
