// /app-passenger/src/models/User.js

class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static async getProfile(id) {
        // Simulação de busca no banco de dados pelo perfil do passageiro
        return new User(id, 'Paulo Oliveira', 'paulo@example.com');
    }

    static async updateProfile(id, { name, email }) {
        // Simulação de atualização de perfil
        return new User(id, name, email);
    }
}

module.exports = User;
