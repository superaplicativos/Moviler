// /app-passenger/index.js

import './assets/css/passenger.css';
import './assets/css/ridebooking.css';
import './assets/css/ridehistory.css';
import './assets/css/profile.css';
import './assets/css/paymentmethods.css';

import { loadRideBooking } from './assets/js/passenger.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('App do Passageiro Carregado.');

    // Inicializa o agendamento de corridas ao carregar a página principal
    loadRideBooking();

    // Configura a navegação entre páginas
    document.querySelector('#ride-booking-link').addEventListener('click', loadRideBooking);
    document.querySelector('#ride-history-link').addEventListener('click', loadRideHistory);
    document.querySelector('#profile-link').addEventListener('click', loadProfile);
    document.querySelector('#payment-methods-link').addEventListener('click', loadPaymentMethods);
});
