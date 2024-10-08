// /app-passenger/src/models/Ride.js

class Ride {
    constructor(id, pickup, destination, rideType, status, passengerId, driverId) {
        this.id = id;
        this.pickup = pickup;
        this.destination = destination;
        this.rideType = rideType;
        this.status = status;
        this.passengerId = passengerId;
        this.driverId = driverId;
    }

    static async bookRide(pickup, destination, rideType, passengerId) {
        // Simulação de agendamento de corrida
        const newRide = new Ride(Date.now(), pickup, destination, rideType, 'Agendada', passengerId, null);
        return newRide;
    }

    static async getRideHistory(passengerId) {
        // Simulação de busca no banco de dados pelo histórico de corridas
        return [
            new Ride(101, 'Rua A', 'Rua B', 'Padrão', 'Concluída', passengerId, 1),
            new Ride(102, 'Rua C', 'Rua D', 'Premium', 'Cancelada', passengerId, 2),
        ];
    }

    static async getRideDetails(id) {
        // Simulação de busca de detalhes de uma corrida específica
        return new Ride(id, 'Rua A', 'Rua B', 'Padrão', 'Concluída', 1, 1);
    }
}

module.exports = Ride;
