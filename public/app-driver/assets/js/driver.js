// /app-driver/assets/js/driver.js

export function loadRideRequests() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="ride-requests">
            <h1>Solicitações de Corridas</h1>
            <p>Você tem uma nova corrida solicitada!</p>
            <button id="accept-ride">Aceitar Corrida</button>
            <button id="decline-ride">Recusar Corrida</button>
        </div>
    `;
    console.log('Página de solicitações de corridas carregada.');
}

export function loadRideHistory() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="ride-history">
            <h1>Histórico de Corridas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Passageiro</th>
                        <th>Data</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>201</td>
                        <td>Paulo Oliveira</td>
                        <td>15/08/2023</td>
                        <td>Concluída</td>
                    </tr>
                    <tr>
                        <td>202</td>
                        <td>Maria Souza</td>
                        <td>14/08/2023</td>
                        <td>Cancelada</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    console.log('Página de histórico de corridas carregada.');
}

export function loadEarnings() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="earnings">
            <h1>Seus Ganhos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15/08/2023</td>
                        <td>R$ 200,00</td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>14/08/2023</td>
                        <td>R$ 150,00</td>
                        <td>Pago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    console.log('Página de ganhos carregada.');
}

export function loadProfile() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="profile">
            <h1>Perfil do Motorista</h1>
            <label for="name">Nome</label>
            <input type="text" id="name" value="João Silva" />

            <label for="email">E-mail</label>
            <input type="email" id="email" value="joao@example.com" />

            <button id="update-profile">Atualizar Perfil</button>
        </div>
    `;
    console.log('Página de perfil carregada.');
}
