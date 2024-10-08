// /app-driver/src/models/Ride.js

class Ride {
    constructor(id, pickup, destination, status, passengerId, driverId) {
        this.id = id;
        this.pickup = pickup;
        this.destination = destination;
        this.status = status;
        this.passengerId = passengerId;
        this.driverId = driverId;
    }

    static async getRideRequests(driverId) {
        // Simulação de busca no banco de dados para solicitações de corridas
        return [
            new Ride(301, 'Rua A', 'Rua B', 'Solicitada', null, driverId),
            new Ride(302, 'Rua C', 'Rua D', 'Solicitada', null, driverId),
        ];
    }

    static async acceptRide(rideId, driverId) {
        // Simulação de aceitação de corrida
        return new Ride(rideId, 'Rua A', 'Rua B', 'Aceita', null, driverId);
    }

    static async declineRide(rideId) {
        // Simulação de recusa de corrida
        return { message: 'Corrida recusada com sucesso' };
    }

    static async getRideHistory(driverId) {
        // Simulação de busca no banco de dados pelo histórico de corridas
        return [
            new Ride(401, 'Rua A', 'Rua B', 'Concluída', 1, driverId),
            new Ride(402, 'Rua C', 'Rua D', 'Cancelada', 2, driverId),
        ];
    }
}

module.exports = Ride;
