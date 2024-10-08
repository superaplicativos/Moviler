// /admin-client/assets/js/adminclient.js

export function loadDashboard() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1>Dashboard - Cliente</h1>
        <div class="dashboard-grid">
            <div class="metric-box">
                <h2>Motoristas Ativos</h2>
                <p>25</p>
            </div>
            <div class="metric-box">
                <h2>Corridas Ativas</h2>
                <p>40</p>
            </div>
            <div class="metric-box">
                <h2>Receita Total</h2>
                <p>R$ 5.000,00</p>
            </div>
        </div>
    `;
    console.log('Dashboard carregado.');
}

export function loadDrivers() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1>Gestão de Motoristas</h1>
        <div class="drivers-header">
            <h2>Lista de Motoristas</h2>
            <a href="#" class="add-driver-btn">Adicionar Motorista</a>
        </div>
        <table class="drivers-table">
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
                    <td>João Silva</td>
                    <td>Ativo</td>
                    <td><a href="#">Ver Detalhes</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Souza</td>
                    <td>Inativo</td>
                    <td><a href="#">Ver Detalhes</a></td>
                </tr>
            </tbody>
        </table>
    `;
    console.log('Página de motoristas carregada.');
}

export function loadRides() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1>Gestão de Corridas</h1>
        <table class="rides-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Motorista</th>
                    <th>Passageiro</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>101</td>
                    <td>João Silva</td>
                    <td>Paulo Oliveira</td>
                    <td>Ativa</td>
                </tr>
                <tr>
                    <td>102</td>
                    <td>Maria Souza</td>
                    <td>Ana Costa</td>
                    <td>Concluída</td>
                </tr>
            </tbody>
        </table>
    `;
    console.log('Página de corridas carregada.');
}

export function loadPayments() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1>Configurações de Pagamento</h1>
        <div class="payments-settings">
            <form>
                <label>Chave API Stripe</label>
                <input type="text" name="stripeKey" value="chave-xxxx-xxxx" />

                <label>Comissão (%)</label>
                <input type="text" name="commission" value="10%" />

                <button type="submit">Salvar Configurações</button>
            </form>
        </div>
    `;
    console.log('Página de configurações de pagamento carregada.');
}
