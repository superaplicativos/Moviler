// /app-passenger/src/controllers/RideController.js

const RideService = require('../services/RideService');

class RideController {
    static async bookRide(req, res) {
        const { pickup, destination, rideType } = req.body;
        try {
            const ride = await RideService.bookRide(pickup, destination, rideType, req.user.id);
            res.status(200).json(ride);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao agendar corrida', error });
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
