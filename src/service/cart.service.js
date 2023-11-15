import createApiClient from './api.service.js';

class CartService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async addToCart(idUser, product) {
        return (await this.api.put(`/cart/${idUser}`, product)).data;
    }

    async getCart(idUser) {
        return (await this.api.get(`/cart/${idUser}`)).data;
    }

    async deleteOneProduct(idUser, idProduct) {
        return (await this.api.put(`/cart-delete/${idUser}`, { idProduct: idProduct })).data;
    }

    async resetCart(idUser) {
        return (await this.api.get(`/cart-reset/${idUser}`)).data;
    }
}

export default new CartService();