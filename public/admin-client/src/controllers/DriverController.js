// /admin-client/src/controllers/DriverController.js

const DriverService = require('../services/DriverService');

const DriverController = {
    listDrivers: async (req, res) => {
        try {
            const drivers = await DriverService.getDrivers(req.user.id);
            res.status(200).json(drivers);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar motoristas', error });
        }
    },

    addDriver: async (req, res) => {
        try {
            const newDriver = await DriverService.createDriver(req.body, req.user.id);
            res.status(201).json(newDriver);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao adicionar motorista', error });
        }
    },

    updateDriver: async (req, res) => {
        try {
            const updatedDriver = await DriverService.updateDriver(req.params.id, req.body);
            res.status(200).json(updatedDriver);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar motorista', error });
        }
    },
};

module.exports = DriverController;
