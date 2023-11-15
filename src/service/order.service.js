import createApiClient from './api.service.js';

class OrderService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async create(data) {
        return (await this.api.post('/order-create', { data })).data;
    }

    async getOrder(idOrder) {
        return (await this.api.get(`/order/${idOrder}`)).data;
    }

    async getOrderDetail(idOrder) {
        return (await this.api.get(`/order-detail/${idOrder}`)).data;
    }
}

export default new OrderService();