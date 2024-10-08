// /admin-client/src/models/Ride.js

class Ride {
    constructor(id, driver, passenger, status) {
        this.id = id;
        this.driver = driver;
        this.passenger = passenger;
        this.status = status;
    }

    static async getRides(clientId) {
        // Simulação de consulta ao banco de dados para listar corridas
        return [
            new Ride(101, 'João Silva', 'Paulo Oliveira', 'Ativa'),
            new Ride(102, 'Maria Souza', 'Ana Costa', 'Concluída')
        ];
    }

    static async getRideById(id) {
        // Simulação de consulta ao banco de dados para obter os detalhes de uma corrida
        return new Ride(id, 'João Silva', 'Paulo Oliveira', 'Ativa');
    }
}

module.exports = Ride;
