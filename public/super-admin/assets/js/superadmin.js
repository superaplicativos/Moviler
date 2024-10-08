// /super-admin/assets/js/superadmin.js

// Função para carregar o conteúdo do dashboard
export function loadDashboard() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1>Dashboard - Super Admin</h1>
        <div class="dashboard">
            <div class="metric-box">
                <h2>Total de Clientes</h2>
                <p>30</p>
            </div>
            <div class="metric-box">
                <h2>Corridas Ativas</h2>
                <p>120</p>
            </div>
            <div class="metric-box">
                <h2>Motoristas Online</h2>
                <p>200</p>
            </div>
        </div>
    `;
    console.log('Dashboard carregado.');
}

// Função para carregar a página de clientes
export function loadClients() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1>Gestão de Clientes</h1>
        <div class="clients-header">
            <h2>Lista de Clientes</h2>
            <a href="#" class="add-client-btn">Adicionar Cliente</a>
        </div>
        <table class="clients-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Empresa 1</td>
                    <td>Ativo</td>
                    <td><a href="#">Ver Detalhes</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Empresa 2</td>
                    <td>Suspenso</td>
                    <td><a href="#">Ver Detalhes</a></td>
                </tr>
            </tbody>
        </table>
    `;
    console.log('Página de clientes carregada.');
}
