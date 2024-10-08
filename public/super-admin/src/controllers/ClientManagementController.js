// /super-admin/src/controllers/ClientManagementController.js

const ClientService = require('../services/ClientService');

const ClientManagementController = {
    listClients: async (req, res) => {
        try {
            const clients = await ClientService.getAllClients();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar os clientes', error });
        }
    },

    createClient: async (req, res) => {
        try {
            const newClient = await ClientService.createClient(req.body);
            res.status(201).json(newClient);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar cliente', error });
        }
    },

    updateClient: async (req, res) => {
        try {
            const updatedClient = await ClientService.updateClient(req.params.id, req.body);
            res.status(200).json(updatedClient);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar cliente', error });
        }
    },

    deleteClient: async (req, res) => {
        try {
            await ClientService.deleteClient(req.params.id);
            res.status(204).json({ message: 'Cliente removido com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar cliente', error });
        }
    },
};

module.exports = ClientManagementController;
