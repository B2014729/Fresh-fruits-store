<template>
    <div class="container pt-3 d-flex justify-content-center">
        <div class="w-50">
            <h5 class="fw-bold fst-italic text-center" style="color: rgb(127, 127, 127);"> THÔNG TIN ĐƠN HÀNG</h5>
            <div>
                <p class="text-secondary fst-italic">* Sản phẩm: </p>
                <ul>
                    <li v-for="(product, index) in orderInfo.products" :key="index">
                        <CardProductOrder :product="product" :index="index + 1" />
                    </li>
                </ul>

                <p class="text-secondary fst-italic">* Thanh toán: {{ orderInfo.payment }} vnd.</p>
                <p class="text-secondary fst-italic">* Thông tin giao hàng: </p>
                <ul>
                    <li><span class="fw-bold">Khách hàng:</span> {{ orderInfo.fullname }}</li>
                    <li><span class="fw-bold">Số điện thoại:</span> {{ orderInfo.phone }}</li>
                    <li><span class="fw-bold">Địa chỉ giao hàng:</span> {{ orderInfo.deliveryAddress }}</li>
                    <li><span class="fw-bold">Trạng thái đơn hàng:</span> {{ orderInfo.status }}</li>
                </ul>
            </div>
            <router-link :to="{ name: 'your-cart' }">
                <button class="btn btn-secondary">Quay lại</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import CardProductOrder from '@/components/product/cardProductOrder.vue';
import authService from '@/service/auth.service';
import orderService from '@/service/order.service';

export default {
    name: 'OrderDetail',
    components: {
        CardProductOrder
    },
    props: {
        idOrder: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            orderInfo: {},
            product: {}
        };
    },

    async created() {
        await orderService.getOrder(this.idOrder).then((result) => {
            this.orderInfo = result.data;
        });
        await authService.getInfo(this.$cookies.get('jwt')).then((result) => {
            this.orderInfo.phone = result.data.phone;
            this.orderInfo.fullname = result.data.fullname;
        });

        await orderService.getOrderDetail(this.idOrder).then((result) => {
            this.orderInfo.payment = result.data.payment;
            this.orderInfo.products = result.data.products;
        })
        this.product = this.orderInfo.products[0]
    }
}
</script>
<style scoped></style>