// /api-gateway/src/services/DriverService.js

const Driver = require('../models/Driver');

class DriverService {
    static async registerDriver(driverData) {
        try {
            const newDriver = new Driver(driverData);
            await newDriver.save();
            return newDriver;
        } catch (error) {
            console.error('Erro ao registrar motorista:', error);
            throw error;
        }
    }

    static async getAvailableDrivers() {
        try {
            const drivers = await Driver.find({ status: 'Disponível' });
            return drivers;
        } catch (error) {
            console.error('Erro ao buscar motoristas disponíveis:', error);
            throw error;
        }
    }

    static async updateDriverStatus(driverId, status) {
        try {
            const driver = await Driver.findById(driverId);
            if (!driver) throw new Error('Motorista não encontrado');

            driver.status = status;
            await driver.save();
            return driver;
        } catch (error) {
            console.error('Erro ao atualizar status do motorista:', error);
            throw error;
        }
    }
}

module.exports = DriverService;
