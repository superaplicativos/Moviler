// /api-gateway/src/controllers/AuthController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserService = require('../services/UserService');

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await UserService.getUserByEmail(email);

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token });
        } catch (error) {
            console.error('Erro no login:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async register(req, res) {
        const { name, email, password, role } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await UserService.createUser({ name, email, password: hashedPassword, role });

            return res.status(201).json({ user: newUser });
        } catch (error) {
            console.error('Erro no registro:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }

    static async verifyToken(req, res, next) {
        const token = req.headers.authorization;

        if (!token) return res.status(401).json({ message: 'Token não fornecido' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Token inválido' });
        }
    }
}

module.exports = AuthController;
