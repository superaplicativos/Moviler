// /super-admin/src/services/ApiService.js

const axios = require('axios');

class ApiService {
    static async get(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição GET', error);
            throw error;
        }
    }

    static async post(url, data) {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição POST', error);
            throw error;
        }
    }
}

module.exports = ApiService;
