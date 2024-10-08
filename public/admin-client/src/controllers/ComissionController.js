// /admin-client/src/controllers/CommissionController.js

const CommissionService = require('../services/CommissionService');

const CommissionController = {
    getCommissionSettings: async (req, res) => {
        try {
            const settings = await CommissionService.getCommissionSettings(req.user.id);
            res.status(200).json(settings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar configurações de comissão', error });
        }
    },

    updateCommissionSettings: async (req, res) => {
        try {
            const updatedSettings = await CommissionService.updateCommissionSettings(req.user.id, req.body);
            res.status(200).json(updatedSettings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar configurações de comissão', error });
        }
    },
};

module.exports = CommissionController;
