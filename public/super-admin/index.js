// /super-admin/index.js

import './assets/css/superadmin.css';
import './assets/css/dashboard.css';
import './assets/css/clients.css';

import { loadDashboard } from './assets/js/superadmin.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Painel Super Admin carregado.');

    // Inicializa o dashboard ao carregar a página principal
    loadDashboard();
    
    // Configura eventos para navegação entre páginas
    document.querySelector('#dashboard-link').addEventListener('click', loadDashboard);
    document.querySelector('#clients-link').addEventListener('click', loadClients);
});

// Função para carregar a página de clientes (para adicionar depois)
function loadClients() {
    console.log('Carregando página de clientes...');
    // Exemplo de carregar conteúdo dinâmico na página de clientes
}
