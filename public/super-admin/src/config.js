// /super-admin/src/config.js

module.exports = {
    appName: 'Super App de Mobilidade',
    currency: 'BRL',
    defaultCommission: '5%',
    jwtSecret: process.env.JWT_SECRET || 'chave-secreta',
};
