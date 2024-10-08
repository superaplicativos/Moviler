// /super-admin/src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#" id="dashboard-link">Dashboard</a></li>
                <li><a href="#" id="clients-link">Clientes</a></li>
                <li><a href="#" id="rides-link">Corridas</a></li>
                <li><a href="#" id="payments-link">Pagamentos</a></li>
                <li><a href="#" id="settings-link">Configurações</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
