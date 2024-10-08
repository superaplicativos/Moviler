// /admin-client/src/controllers/TariffController.js

const TariffService = require('../services/TariffService');

const TariffController = {
    getTariffSettings: async (req, res) => {
        try {
            const tariffs = await TariffService.getTariffSettings(req.user.id);
            res.status(200).json(tariffs);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar configurações de tarifa', error });
        }
    },

    updateTariffSettings: async (req, res) => {
        try {
            const updatedTariffs = await TariffService.updateTariffSettings(req.user.id, req.body);
            res.status(200).json(updatedTariffs);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar configurações de tarifa', error });
        }
    },
};

module.exports = TariffController;
