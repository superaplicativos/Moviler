// /app-driver/src/controllers/EarningsController.js

const EarningsService = require('../services/EarningsService');

class EarningsController {
    static async getEarnings(req, res) {
        try {
            const earnings = await EarningsService.getEarnings(req.user.id);
            res.status(200).json(earnings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao carregar ganhos', error });
        }
    }
}

module.exports = EarningsController;
