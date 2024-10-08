// /api-gateway/src/controllers/DriverController.js

const DriverService = require('../services/DriverService');

class DriverController {
    static async registerDriver(req, res) {
        const { name, email, vehicleDetails } = req.body;

        try {
            const newDriver = await DriverService.registerDriver({ name, email, vehicleDetails });
            return res.status(201).json(newDriver);
        } catch (error) {
            console.error('Erro ao registrar motorista:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async getAvailableDrivers(req, res) {
        try {
            const drivers = await DriverService.getAvailableDrivers();
            return res.status(200).json(drivers);
        } catch (error) {
            console.error('Erro ao buscar motoristas disponíveis:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async updateDriverStatus(req, res) {
        const { driverId, status } = req.body;

        try {
            const updatedDriver = await DriverService.updateDriverStatus(driverId, status);
            return res.status(200).json(updatedDriver);
        } catch (error) {
            console.error('Erro ao atualizar status do motorista:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }
}

module.exports = DriverController;
