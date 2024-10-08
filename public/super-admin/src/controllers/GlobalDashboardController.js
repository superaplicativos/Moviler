// /super-admin/src/controllers/GlobalDashboardController.js

const GlobalDashboardService = require('../services/GlobalDashboardService');

const GlobalDashboardController = {
    getDashboardMetrics: async (req, res) => {
        try {
            const metrics = await GlobalDashboardService.getMetrics();
            res.status(200).json(metrics);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao carregar as métricas do dashboard', error });
        }
    },
};

module.exports = GlobalDashboardController;
