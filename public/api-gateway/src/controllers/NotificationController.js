// /api-gateway/src/controllers/NotificationController.js

const NotificationService = require('../services/NotificationService');

class NotificationController {
    static async sendNotification(req, res) {
        const { userId, title, message } = req.body;

        try {
            await NotificationService.sendNotification(userId, title, message);
            return res.status(200).json({ message: 'Notificação enviada com sucesso' });
        } catch (error) {
            console.error('Erro ao enviar notificação:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async getNotifications(req, res) {
        const { userId } = req.params;

        try {
            const notifications = await NotificationService.getNotifications(userId);
            return res.status(200).json(notifications);
        } catch (error) {
            console.error('Erro ao buscar notificações:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }
}

module.exports = NotificationController;
