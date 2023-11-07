<template>
    <div class="container w-75">
        <div class="py-3">
            <h6 style="color: rgb(127, 127, 127);">
                <router-link :to="{ name: 'home-page' }">Trang chủ </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }"> Danh mục sản
                    phẩm</router-link>
            </h6>
        </div>
        <p class="text-secondary">Fresh Fruits cam kết, giá thành trái cây nhập khẩu tốt hơn nhưng chất lượng không thay
            đổi. Fresh Fruits nói
            không với hàng
            Trung Quốc.</p>
        <h5 v-if="producttype == 'mn'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">TRÁI CÂY MIỀN NAM___
        </h5>
        <h5 v-if="producttype == 'mb'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">TRÁI CÂY MIỀN BẮC___
        </h5>
        <h5 v-if="producttype == 'nk'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">TRÁI CÂY NHẬP
            KHẨU___
        </h5>

        <div class="row">
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
            <div class="col-md-3">
                <CardProduct />
            </div>
        </div>
    </div>
</template>

<script>
import CardProduct from '@/components/product/cardProduct.vue';
export default {
    name: 'ProductPortfolio',
    components: {
        CardProduct,
    },
    props: {
        producttype: {
            type: String,
        }
    },
}


</script>

<style scoped></style>