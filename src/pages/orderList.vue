<template>
    <div class="container w-75 p-3">
        <h5 class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">ĐƠN HÀNG CỦA BẠN__:</h5>
        <div class="w-100">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Ngày đặt hàng</th>
                        <th scope="col" class="text-center">Tổng thanh toán (VND)</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order, index) in orderList" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ order._id }}</td>
                        <td>{{ order.orderDate }}</td>
                        <td class="text-center">{{ formatNumber(order.payment + 49000) }}</td>
                        <td>{{ order.status }}</td>
                        <td>
                            <router-link :to="{ name: 'order-detail', params: { idOrder: order._id } }">
                                <button class="btn btn-primary"> Chi tiết</button>
                            </router-link>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import orderService from '@/service/order.service';
import moment from 'moment';
export default {
    name: 'OrderList',

    setup() {
        function formatNumber(number) {
            return (new Intl.NumberFormat().format(number));
        }

        return {
            formatNumber
        }
    },
    data() {
        return {
            orderList: [],
        };
    },

    async created() {
        await orderService.getListOrder(this.$cookies.get('jwt')).then((result) => {
            this.orderList = result.data;
        });

        for (let i = 0; i < this.orderList.length; i++) {
            this.orderList[i].orderDate = moment(this.orderList[i].orderDate).format("DD/MM/YYYY");
            await orderService.getOrderDetail(this.orderList[i]._id).then((result) => {
                this.orderList[i].payment = result.data.payment;
            });
        }
    }
}
</script>
<style scoped></style>