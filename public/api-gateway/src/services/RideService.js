// /api-gateway/src/services/RideService.js

const Ride = require('../models/Ride');

class RideService {
    static async createRide(pickup, destination, driverId, passengerId) {
        try {
            const newRide = new Ride({ pickup, destination, driverId, passengerId, status: 'Solicitada' });
            await newRide.save();
            return newRide;
        } catch (error) {
            console.error('Erro ao criar corrida:', error);
            throw error;
        }
    }

    static async getRideHistory(userId) {
        try {
            const rides = await Ride.find({ $or: [{ driverId: userId }, { passengerId: userId }] });
            return rides;
        } catch (error) {
            console.error('Erro ao buscar histórico de corridas:', error);
            throw error;
        }
    }

    static async updateRideStatus(rideId, status) {
        try {
            const ride = await Ride.findById(rideId);
            if (!ride) throw new Error('Corrida não encontrada');

            ride.status = status;
            await ride.save();
            return ride;
        } catch (error) {
            console.error('Erro ao atualizar status da corrida:', error);
            throw error;
        }
    }
}

module.exports = RideService;
