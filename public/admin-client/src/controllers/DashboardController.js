// /admin-client/src/controllers/DashboardController.js

const DashboardService = require('../services/DashboardService');

const DashboardController = {
    getDashboardMetrics: async (req, res) => {
        try {
            const metrics = await DashboardService.getMetrics(req.user.id);
            res.status(200).json(metrics);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao carregar métricas do dashboard', error });
        }
    },
};

module.exports = DashboardController;
