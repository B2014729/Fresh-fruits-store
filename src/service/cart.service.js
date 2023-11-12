import createApiClient from './api.service.js';

class CartService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }
}

export default new CartService();