// /app-driver/src/models/Earnings.js

class Earnings {
    constructor(date, amount, status, driverId) {
        this.date = date;
        this.amount = amount;
        this.status = status;
        this.driverId = driverId;
    }

    static async getEarnings(driverId) {
        // Simulação de busca no banco de dados pelos ganhos
        return [
            new Earnings('15/08/2023', 'R$ 200,00', 'Pago', driverId),
            new Earnings('14/08/2023', 'R$ 150,00', 'Pago', driverId),
        ];
    }
}

module.exports = Earnings;
