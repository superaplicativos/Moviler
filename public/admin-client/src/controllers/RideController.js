// /admin-client/src/controllers/RideController.js

const RideService = require('../services/RideService');

const RideController = {
    listRides: async (req, res) => {
        try {
            const rides = await RideService.getRides(req.user.id);
            res.status(200).json(rides);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar corridas', error });
        }
    },

    getRideDetails: async (req, res) => {
        try {
            const ride = await RideService.getRideById(req.params.id);
            res.status(200).json(ride);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar detalhes da corrida', error });
        }
    },
};

module.exports = RideController;
