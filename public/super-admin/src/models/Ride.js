// /super-admin/src/models/Ride.js

class Ride {
    constructor(id, driver, passenger, status) {
        this.id = id;
        this.driver = driver;
        this.passenger = passenger;
        this.status = status;
    }

    static async getAllRides() {
        // Exemplo de consulta ao banco de dados para obter todas as corridas
        return [
            new Ride(101, 'Motorista A', 'Passageiro X', 'Concluída'),
            new Ride(102, 'Motorista B', 'Passageiro Y', 'Ativa')
        ];
    }

    static async getRideById(id) {
        // Exemplo de consulta ao banco de dados para obter uma corrida por ID
        return new Ride(id, 'Motorista A', 'Passageiro X', 'Concluída');
    }
}

module.exports = Ride;
