// /api-gateway/src/routes/authRoutes.js

const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

// Rota para login
router.post('/login', AuthController.login);

// Rota para registro de novos usuários
router.post('/register', AuthController.register);

// Middleware para verificar o token de autenticação
router.use(AuthController.verifyToken);

module.exports = router;
