// /super-admin/src/services/NotificationService.js

class NotificationService {
    static async sendNotification(to, message) {
        try {
            // Simulação do envio de notificação
            console.log(`Notificação enviada para ${to}: ${message}`);
        } catch (error) {
            console.error('Erro ao enviar notificação', error);
            throw error;
        }
    }
}

module.exports = NotificationService;
