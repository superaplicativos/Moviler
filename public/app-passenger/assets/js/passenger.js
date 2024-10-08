// /app-passenger/assets/js/passenger.js

export function loadRideBooking() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="ride-booking">
            <h1>Agendar Corrida</h1>
            <label for="pickup">Ponto de Partida</label>
            <input type="text" id="pickup" placeholder="Digite o endereço de partida..." />
            
            <label for="destination">Destino</label>
            <input type="text" id="destination" placeholder="Digite o endereço de destino..." />
            
            <label for="ride-type">Tipo de Corrida</label>
            <select id="ride-type">
                <option value="standard">Padrão</option>
                <option value="premium">Premium</option>
                <option value="moto">Moto</option>
            </select>

            <button id="book-ride">Agendar Corrida</button>
        </div>
    `;
    console.log('Página de agendamento de corrida carregada.');
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
                        <th>Motorista</th>
                        <th>Data</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>João Silva</td>
                        <td>15/08/2023</td>
                        <td>Concluída</td>
                    </tr>
                    <tr>
                        <td>102</td>
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

export function loadProfile() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="profile">
            <h1>Perfil do Passageiro</h1>
            <label for="name">Nome</label>
            <input type="text" id="name" value="Paulo Oliveira" />
            
            <label for="email">E-mail</label>
            <input type="email" id="email" value="paulo@example.com" />

            <button id="update-profile">Atualizar Perfil</button>
        </div>
    `;
    console.log('Página de perfil carregada.');
}

export function loadPaymentMethods() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="payment-methods">
            <h1>Métodos de Pagamento</h1>
            <label for="payment-method">Selecione o Método de Pagamento</label>
            <select id="payment-method">
                <option value="credit-card">Cartão de Crédito</option>
                <option value="debit-card">Cartão de Débito</option>
                <option value="paypal">PayPal</option>
            </select>

            <button id="save-payment-method">Salvar Método de Pagamento</button>
        </div>
    `;
    console.log('Página de métodos de pagamento carregada.');
}
