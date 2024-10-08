// /admin-client/src/models/Dashboard.js

class Dashboard {
    constructor(driverCount, activeRides, totalRevenue) {
        this.driverCount = driverCount;
        this.activeRides = activeRides;
        this.totalRevenue = totalRevenue;
    }

    static async getMetrics(clientId) {
        // Simulação de consulta ao banco de dados para buscar as métricas do dashboard
        return new Dashboard(25, 40, 'R$ 5.000,00');
    }
}

module.exports = Dashboard;
