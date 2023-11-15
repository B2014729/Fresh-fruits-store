import createApiClient from './api.service.js';

class AuthService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async login(inforlogin) {
        return (await this.api.post('/consumer-login', { email: inforlogin.email, password: inforlogin.password }));
    }

    async checkEmail(email) {
        return (await this.api.get(`/consumer-search/${email}`)).data;
    }

    async signup(inforSignup) {
        return (await this.api.post('/consumer-create', { email: inforSignup.email, password: inforSignup.password })).data;
    }

    async getInfo(token) {
        return (await this.api.get(`/consumer/${token}`)).data;
    }

    async updateInfor(data, token) {
        return (await this.api.put(`/consumer/${token}`, data)).data;
    }
}

export default new AuthService();