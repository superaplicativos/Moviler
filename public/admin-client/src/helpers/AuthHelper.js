// /admin-client/src/helpers/AuthHelper.js

const jwt = require('jsonwebtoken');

class AuthHelper {
    static generateToken(user) {
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }

    static verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            console.error('Token inválido:', error);
            return null;
        }
    }
}

module.exports = AuthHelper;
