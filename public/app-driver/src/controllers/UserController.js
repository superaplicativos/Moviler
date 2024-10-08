// /app-driver/src/controllers/UserController.js

const UserService = require('../services/UserService');

class UserController {
    static async getProfile(req, res) {
        try {
            const profile = await UserService.getProfile(req.user.id);
            res.status(200).json(profile);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao carregar perfil', error });
        }
    }

    static async updateProfile(req, res) {
        const { name, email } = req.body;
        try {
            const updatedProfile = await UserService.updateProfile(req.user.id, { name, email });
            res.status(200).json(updatedProfile);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar perfil', error });
        }
    }
}

module.exports = UserController;
