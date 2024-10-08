// /api-gateway/app.js

const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const rideRoutes = require('./src/routes/rideRoutes');
const driverRoutes = require('./src/routes/driverRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/auth', authRoutes);
app.use('/payments', paymentRoutes);
app.use('/rides', rideRoutes);
app.use('/drivers', driverRoutes);

module.exports = app;
