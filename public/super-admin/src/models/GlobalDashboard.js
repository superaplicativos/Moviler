// /super-admin/src/models/GlobalDashboard.js

class GlobalDashboard {
    constructor(totalClients, activeRides, onlineDrivers) {
        this.totalClients = totalClients;
        this.activeRides = activeRides;
        this.onlineDrivers = onlineDrivers;
    }

    static async fetchDashboardMetrics() {
        // Exemplo de consulta ao banco de dados para obter métricas
        return {
            totalClients: 30,
            activeRides: 120,
            onlineDrivers: 200
        };
    }
}

module.exports = GlobalDashboard;
