<template>
    <div class="container w-75">
        <div class="py-3">
            <h6 style="color: rgb(127, 127, 127);">
                <router-link :to="{ name: 'home-page' }">Trang chủ </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }"> Danh mục sản
                    phẩm </router-link>
                <i class="fa-solid fa-chevron-right"></i> Vãi nhập khẩu
            </h6>
        </div>

        <CardDetailProduct />
        <hr>
        <h5 class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">SẢN PHẨM TƯƠNG TỰ___</h5>
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
        </div>
        <router-link :to="{ name: 'home-page' }">
            <button>home</button>
        </router-link>
    </div>
</template>
<script>

import CardProduct from '@/components/product/cardProduct.vue';
import CardDetailProduct from '@/components/product/cardDetailProduct.vue';
export default {
    name: 'DetailProduct',
    components: {
        CardDetailProduct,
        CardProduct,
    },

    props: {
        idProduct: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped></style>