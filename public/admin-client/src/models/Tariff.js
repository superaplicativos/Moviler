// /admin-client/src/models/Tariff.js

class Tariff {
    constructor(id, baseFare, perKmRate, perMinuteRate, regionId) {
        this.id = id;
        this.baseFare = baseFare;
        this.perKmRate = perKmRate;
        this.perMinuteRate = perMinuteRate;
        this.regionId = regionId;
    }

    static async getTariffSettings(clientId) {
        // Simulação de consulta ao banco de dados para obter as tarifas do cliente
        return [
            new Tariff(1, 'R$ 5,00', 'R$ 2,00', 'R$ 0,50', 1),
            new Tariff(2, 'R$ 4,00', 'R$ 1,80', 'R$ 0,45', 2)
        ];
    }

    static async updateTariffSettings(clientId, tariffSettings) {
        // Simulação de atualização das tarifas
        return [
            new Tariff(1, tariffSettings.baseFare, tariffSettings.perKmRate, tariffSettings.perMinuteRate, 1)
        ];
    }
}

module.exports = Tariff;
