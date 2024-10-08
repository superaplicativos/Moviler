// /app-driver/src/controllers/RideController.js

const RideService = require('../services/RideService');

class RideController {
    static async getRideRequests(req, res) {
        try {
            const requests = await RideService.getRideRequests(req.user.id);
            res.status(200).json(requests);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar solicitações de corridas', error });
        }
    }

    static async acceptRide(req, res) {
        const { rideId } = req.body;
        try {
            const acceptedRide = await RideService.acceptRide(rideId, req.user.id);
            res.status(200).json(acceptedRide);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao aceitar corrida', error });
        }
    }

    static async declineRide(req, res) {
        const { rideId } = req.body;
        try {
            await RideService.declineRide(rideId);
            res.status(200).json({ message: 'Corrida recusada com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao recusar corrida', error });
        }
    }

    static async getRideHistory(req, res) {
        try {
            const history = await RideService.getRideHistory(req.user.id);
            res.status(200).json(history);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao carregar histórico de corridas', error });
        }
    }
}

module.exports = RideController;
