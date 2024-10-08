// /api-gateway/src/services/UserService.js

const User = require('../models/User');

class UserService {
    static async createUser(userData) {
        try {
            const newUser = new User(userData);
            await newUser.save();
            return newUser;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    }

    static async getUserByEmail(email) {
        try {
            const user = await User.findOne({ email });
            return user;
        } catch (error) {
            console.error('Erro ao buscar usuário por e-mail:', error);
            throw error;
        }
    }
}

module.exports = UserService;
