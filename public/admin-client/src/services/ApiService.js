// /admin-client/src/services/ApiService.js

const axios = require('axios');

class ApiService {
    static async get(url, params = {}) {
        try {
            const response = await axios.get(url, { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição GET:', error);
            throw error;
        }
    }

    static async post(url, data) {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição POST:', error);
            throw error;
        }
    }

    static async put(url, data) {
        try {
            const response = await axios.put(url, data);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição PUT:', error);
            throw error;
        }
    }

    static async delete(url) {
        try {
            const response = await axios.delete(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição DELETE:', error);
            throw error;
        }
    }
}

module.exports = ApiService;
