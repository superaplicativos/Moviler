// /admin-client/src/models/Commission.js

class Commission {
    constructor(commissionPercentage) {
        this.commissionPercentage = commissionPercentage;
    }

    static async getCommissionSettings(clientId) {
        // Simulação de consulta ao banco de dados para obter a configuração de comissão
        return new Commission('10%');
    }

    static async updateCommissionSettings(clientId, commissionSettings) {
        // Simulação de atualização das configurações de comissão
        return new Commission(commissionSettings.commissionPercentage);
    }
}

module.exports = Commission;
