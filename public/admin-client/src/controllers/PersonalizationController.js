// /admin-client/src/controllers/PersonalizationController.js

const PersonalizationService = require('../services/PersonalizationService');

const PersonalizationController = {
    getPersonalizationSettings: async (req, res) => {
        try {
            const settings = await PersonalizationService.getPersonalizationSettings(req.user.id);
            res.status(200).json(settings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar configurações de personalização', error });
        }
    },

    updatePersonalizationSettings: async (req, res) => {
        try {
            const updatedSettings = await PersonalizationService.updatePersonalizationSettings(req.user.id, req.body);
            res.status(200).json(updatedSettings);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar configurações de personalização', error });
        }
    },
};

module.exports = PersonalizationController;
