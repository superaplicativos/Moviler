// /super-admin/src/controllers/CommissionController.js

const CommissionService = require('../services/CommissionService');

const CommissionController = {
    getCommissionSettings: async (req, res) => {
        try {
            const commissionSettings = await CommissionService.getCommissionSettings();
            res.status(200).json(commissionSettings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar as configurações de comissão', error });
        }
    },

    updateCommissionSettings: async (req, res) => {
        try {
            const updatedSettings = await CommissionService.updateCommissionSettings(req.body);
            res.status(200).json(updatedSettings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar as configurações de comissão', error });
        }
    },
};

module.exports = CommissionController;
