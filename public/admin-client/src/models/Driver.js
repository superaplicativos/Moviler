// /admin-client/src/models/Driver.js

class Driver {
    constructor(id, name, status, licenseNumber) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.licenseNumber = licenseNumber;
    }

    static async getDrivers(clientId) {
        // Simulação de consulta ao banco de dados para listar motoristas
        return [
            new Driver(1, 'João Silva', 'Ativo', '123456789'),
            new Driver(2, 'Maria Souza', 'Inativo', '987654321')
        ];
    }

    static async createDriver(driverData, clientId) {
        // Simulação de criação de um novo motorista
        return new Driver(Date.now(), driverData.name, 'Ativo', driverData.licenseNumber);
    }

    static async updateDriver(id, driverData) {
        // Simulação de atualização de motorista
        return new Driver(id, driverData.name, driverData.status, driverData.licenseNumber);
    }
}

module.exports = Driver;
