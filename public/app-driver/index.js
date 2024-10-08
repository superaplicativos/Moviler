// /app-driver/index.js

import './assets/css/driver.css';
import './assets/css/riderequest.css';
import './assets/css/ridehistory.css';
import './assets/css/earnings.css';
import './assets/css/profile.css';

import { loadRideRequests, loadRideHistory, loadEarnings, loadProfile } from './assets/js/driver.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('App do Motorista Carregado.');

    // Inicializa a página de solicitações de corridas ao carregar a página principal
    loadRideRequests();

    // Configura a navegação entre páginas
    document.querySelector('#ride-requests-link').addEventListener('click', loadRideRequests);
    document.querySelector('#ride-history-link').addEventListener('click', loadRideHistory);
    document.querySelector('#earnings-link').addEventListener('click', loadEarnings);
    document.querySelector('#profile-link').addEventListener('click', loadProfile);
});
