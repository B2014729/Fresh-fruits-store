<template>
    <div class="container w-75">
        <div class="py-3">
            <h6 style="color: rgb(127, 127, 127);">
                <router-link :to="{ name: 'home-page' }">Trang chủ </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }"> Danh mục sản
                    phẩm </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'your-cart' }"> Giỏ hàng</router-link>
            </h6>
        </div>

        <h5 class="fw-bold fst-italic" style="color: rgb(127, 127, 127);"> GIỎ HÀNG CỦA BẠN___</h5>
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
                    <CardProductCart :product=product />
                    <CardProductCart :product=product />
                    <CardProductCart :product=product />
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="fw-bold">Tổng hóa đơn:</td>
                        <td class="fw-bold">1,800,000 VND</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="fw-bold fst-italic" style="color: rgb(127, 127, 127);"> THANH TOÁN HÓA ĐƠN___</h5>
        <div class="row">
            <div class="col-md-5 col-sm-6 col-12">
                <h6 class="text-center fst-italic">___THÔNG TIN GIAO HÀNG___</h6>
                <ul>
                    <li><span class="fw-bold">Họ tên KH:</span> Dương Hãi Băng</li>
                    <li><span class="fw-bold">số điện thoại:</span> 0123456789</li>
                    <li>
                        <span class="fw-bold">Địa chỉ giao hàng: </span>124/11A, đường 3/2, Xuân Khánh, Ninh Kiều,
                        Cần Thơ
                        <button class="btn">_<i class="fa-solid fa-pen"></i></button>
                    </li>
                </ul>
            </div>
            <div class="col-md-7 col-sm-6 col-12">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label fw-bold">Phương thức thanh toán:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Thanh toán khi nhận hàng</option>
                            <option value="1">Fresh Fruils Pay</option>
                            <option value="2">Mono App</option>
                        </select>
                    </div>

                    <ul class="float-end">
                        <li><span class="fw-bold">Hóa đơn:</span> 1,800,000 VND</li>
                        <li><span class="fw-bold">Triết khấu:</span> 0 VND</li>
                        <li><span class="fw-bold">Phí vận chuyển:</span> 146,000 VND</li>
                        <hr>
                        <li class="fw-bold"><span>Tổng thanh toán:</span> 1,946,000 VND</li>
                    </ul>
                    <div class="w-100 d-flex justify-content-end">
                        <button type="submit" class="btn btn-success">Thanh toán</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>
<script>
import CardProductCart from '@/components/product/cardProductCart.vue';
export default {
    name: 'YourCart',
    components: {
        CardProductCart,
    },
    data() {
        return {
            product: {},
            quantity: 1,
            gia: 330000,
            tong: 0,
        };
    },
    methods: {
        removeQuantity() {
            if (this.quantity > 1) {
                this.quantity -= 1;
                this.tong -= this.gia;
            }
        },

        addQuantity() {
            this.quantity += 1;
            this.tong += this.gia;
        },
    },
    created() {
        this.tong = this.gia;
        this.product = {
            id: '123', name: 'Nho mẫu đơn'
        }
    }
}

</script>
<style scoped></style>