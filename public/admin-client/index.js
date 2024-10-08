// /admin-client/index.js

import './assets/css/adminclient.css';
import './assets/css/drivers.css';
import './assets/css/rides.css';
import './assets/css/payments.css';

import { loadDashboard } from './assets/js/adminclient.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Painel do Cliente carregado.');

    // Inicializa o dashboard ao carregar a página principal
    loadDashboard();
    
    // Configura eventos para navegação entre páginas
    document.querySelector('#dashboard-link').addEventListener('click', loadDashboard);
    document.querySelector('#drivers-link').addEventListener('click', loadDrivers);
    document.querySelector('#rides-link').addEventListener('click', loadRides);
    document.querySelector('#payments-link').addEventListener('click', loadPayments);
});
