<template>
    <div class="container w-75">
        <div class="py-3 d-flex justify-content-between">
            <h6 style="color: rgb(127, 127, 127);">
                <router-link :to="{ name: 'home-page' }">Trang chủ </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }">
                    Danh mục sản phẩm
                </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'your-cart' }"> Giỏ hàng</router-link>
            </h6>
            <div>
                <router-link :to="{ name: 'order-list' }">
                    <button class="btn btn-secondary">Đơn hàng của bạn</button>
                </router-link>
            </div>
        </div>

        <div class="w-100">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên SP</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Đơn giá (VND)</th>
                        <th scope="col">Giảm (%)</th>
                        <th scope="col">Tổng (VND)</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in listProduct" :key="index">
                        <CardProductCart :product=product @remove="remove($event)" @add="add($event)"
                            @delete-all="deleteAllProductInCart($event)" />
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="fw-bold">Tổng hóa đơn:</td>
                        <td class="fw-bold">{{ formatNumber(sum) }} VND</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="issetUser">
            <h5 class="fw-bold fst-italic" style="color: rgb(127, 127, 127);"> THANH TOÁN HÓA ĐƠN___</h5>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12">
                    <h6 class="text-center fst-italic">___THÔNG TIN GIAO HÀNG___</h6>
                    <ul>
                        <li><span class="fw-bold">Họ tên KH:</span> {{ user.fullname ?? '(Chưa cung cấp)' }}</li>
                        <li><span class="fw-bold">Số điện thoại:</span> {{ user.phone ?? '(Chưa cung cấp)' }}</li>
                        <li>
                            <span class="fw-bold">Địa chỉ giao hàng: </span>{{ user.address ?? '(Chưa cung cấp)' }}
                            <router-link :to="{ name: 'update-info' }">
                                <button class="btn">_<i class="fa-solid fa-pen"></i></button>
                            </router-link>
                        </li>
                        <li>
                            <span class="fw-bold">Ngày giao hàng dự kiến: </span> {{ deliveryDate }}
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 col-sm-6 col-12">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-bold">Phương thức thanh toán:</label>
                            <select id="exampleInputEmail1" class="form-select" aria-label="Default select example">
                                <option selected>Thanh toán khi nhận hàng</option>
                                <option value="1">Fresh Fruils Pay</option>
                                <option value="2">Momo App</option>
                            </select>
                        </div>

                        <ul class="float-end">
                            <li><span class="fw-bold">Hóa đơn:</span> {{ formatNumber(sum) }} VND</li>
                            <li><span class="fw-bold">Triết khấu:</span> 0 VND</li>
                            <li><span class="fw-bold">Phí vận chuyển:</span> {{ formatNumber(49000) }} VND</li>
                            <hr>
                            <li class="fw-bold"><span>Tổng thanh toán:</span> {{ formatNumber(sum + 49000) }} VND</li>
                        </ul>
                    </form>
                    <div class="w-100 d-flex justify-content-end">
                        <button @click="onOrder" class="btn btn-success">Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-warning" style="font-size: 14px;">Đăng nhập để xem thông tin giỏ hàng của bạn!</p>
        </div>
    </div>
</template>
<script>
import CardProductCart from '@/components/product/cardProductCart.vue';
import cartService from '@/service/cart.service';
import authService from '@/service/auth.service';
import orderService from '@/service/order.service';

import moment from 'moment';

export default {
    name: 'YourCart',
    components: {
        CardProductCart,
    },
    data() {
        return {
            issetUser: false,
            userToken: '',
            user: {},
            listProduct: [],
            sum: 0,
            deliveryDate: (new Date()).setDate((new Date().getDate()) + 3),
        };
    },

    setup() {
        function formatNumber(number) {
            return (new Intl.NumberFormat().format(number));
        }

        return {
            formatNumber
        }
    },

    async created() {
        if (this.$cookies.get('jwt')) {
            try {
                this.issetUser = true;
                this.userToken = this.$cookies.get('jwt');

                await authService.getInfo(this.userToken).then((result) => {
                    this.user = result.data;
                });

                await cartService.getCart(this.userToken).then((result) => {
                    this.listProduct = result.products;
                });
                this.listProduct.forEach((product) => {
                    this.sum = this.sum + product.price * product.quantity;
                });

                this.deliveryDate = moment(this.deliveryDate).format("DD/MM/YYYY");
            } catch (error) {
                console.log(error);
            }
        } else {
            this.issetUser = false;
        }
    },

    methods: {
        remove(idProduct) {
            this.listProduct.forEach((product) => {
                if (product.idProduct === idProduct) {
                    product.quantity -= 1;
                    this.sum = this.sum - product.price;
                }
            })
        },

        add(idProduct) {
            this.listProduct.forEach((product) => {
                if (product.idProduct === idProduct) {
                    product.quantity += 1;
                    this.sum = this.sum + product.price;
                }
            })
        },

        deleteProduct(idProduct) {
            console.log(this.sum);
            let indexProduct = -1;
            for (let i = 0; i < this.listProduct.length; i++) {
                if (this.listProduct[i].idProduct === idProduct) {
                    indexProduct = i;
                    break;
                }
            }
            this.sum = this.sum - (this.listProduct[indexProduct].price * this.listProduct[indexProduct].quantity);
            this.listProduct.splice(indexProduct, 1);
        },

        async deleteAllProductInCart(idProduct) {
            try {

                await cartService.deleteOneProduct(this.userToken, idProduct).then((result) => {
                    if (result.statusCode == 200) {
                        this.deleteProduct(idProduct);
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },

        async onOrder() {
            if (!this.user.phone || !this.user.fullname || !this.user.address) {
                alert('Vui lòng cung cấp thông tin giao hàng!');
            } else if (this.sum == 0) {
                alert('Bạn chưa có sản phẩm nào!');
            } else {
                try {
                    let deliveryAddress = '';
                    let deliveryDate = new Date();
                    deliveryDate.setDate(deliveryDate.getDate() + 3);

                    await authService.getInfo(this.userToken).then((result) => {
                        deliveryAddress = result.data.address;
                    });

                    let dataOrder = {
                        idConsumer: this.$cookies.get('jwt'),
                        deliveryDate: deliveryDate,
                        orderDate: new Date(),
                        status: 'Đang xử lí',
                        payment: this.sum,
                        products: this.listProduct,
                        deliveryAddress: deliveryAddress,
                    }

                    let orderSuccess = false;
                    let idOrder = '';
                    await orderService.create(dataOrder).then((result) => {// create tra ve ma don hang vua tao
                        if (result.statusCode == 200) {
                            orderSuccess = true;
                            idOrder = result.data.idOrder;
                            alert('Đã đặt hàng!');
                            this.listProduct = [];
                            this.sum = 0;
                        }
                    });
                    if (orderSuccess) {
                        this.$router.push({ name: 'order-detail', params: { idOrder: idOrder } });
                        await cartService.resetCart(this.userToken);
                    }
                } catch (error) {
                    console.log(error);
                    alert('Đặt hàng không thành công!');
                }
            }
        }
    }
}

</script>
<style scoped></style>