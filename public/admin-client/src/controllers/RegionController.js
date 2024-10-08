// /admin-client/src/controllers/RegionController.js

const RegionService = require('../services/RegionService');

const RegionController = {
    listRegions: async (req, res) => {
        try {
            const regions = await RegionService.getRegions(req.user.id);
            res.status(200).json(regions);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar regiões', error });
        }
    },

    createRegion: async (req, res) => {
        try {
            const newRegion = await RegionService.createRegion(req.body, req.user.id);
            res.status(201).json(newRegion);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar região', error });
        }
    },

    updateRegion: async (req, res) => {
        try {
            const updatedRegion = await RegionService.updateRegion(req.params.id, req.body);
            res.status(200).json(updatedRegion);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar região', error });
        }
    },

    deleteRegion: async (req, res) => {
        try {
            await RegionService.deleteRegion(req.params.id);
            res.status(204).json({ message: 'Região removida com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao remover região', error });
        }
    },
};

module.exports = RegionController;
