import createApiClient from './api.service.js';

class AuthService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async login(inforlogin) {
        return (await this.api.post('/consumer-login', { email: inforlogin.email, password: inforlogin.password }));
    }

    async checkEmail(email) {
        return (await this.api.get(`/consumer/${email}`)).data;
    }

    async signup(inforSignup) {
        return (await this.api.post('/consumer-create', { email: inforSignup.email, password: inforSignup.password })).data;
    }

}

export default new AuthService();