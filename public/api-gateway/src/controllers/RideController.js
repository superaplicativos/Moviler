// /api-gateway/src/controllers/RideController.js

const RideService = require('../services/RideService');

class RideController {
    static async createRide(req, res) {
        const { pickup, destination, driverId, passengerId } = req.body;

        try {
            const newRide = await RideService.createRide(pickup, destination, driverId, passengerId);
            return res.status(201).json(newRide);
        } catch (error) {
            console.error('Erro ao criar corrida:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async getRideHistory(req, res) {
        const { userId } = req.params;

        try {
            const history = await RideService.getRideHistory(userId);
            return res.status(200).json(history);
        } catch (error) {
            console.error('Erro ao buscar histórico de corridas:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async updateRideStatus(req, res) {
        const { rideId, status } = req.body;

        try {
            const updatedRide = await RideService.updateRideStatus(rideId, status);
            return res.status(200).json(updatedRide);
        } catch (error) {
            console.error('Erro ao atualizar status da corrida:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }
}

module.exports = RideController;
