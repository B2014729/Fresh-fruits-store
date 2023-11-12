<template>
    <div class="container w-75">
        <div class="py-3">
            <h6 style="color: rgb(127, 127, 127);">
                <router-link :to="{ name: 'home-page' }">Trang chủ </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }">
                    Danh mục sản phẩm
                </router-link>
                <i class="fa-solid fa-chevron-right"></i> {{ product.name }}
            </h6>
        </div>

        <CardDetailProduct :product=product />

        <hr>
        <h5 class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">SẢN PHẨM TƯƠNG TỰ___</h5>
        <div class="row">
            <div class="col-md-3" v-for="(product, index) in listProduct" :key="index">
                <CardProduct :product=product @onCard="changeProduct" />
            </div>
        </div>
    </div>
</template>
<script>
import CardProduct from '@/components/product/cardProduct.vue';
import CardDetailProduct from '@/components/product/cardDetailProduct.vue';

import productService from '@/service/product.service.js';
import { ref } from 'vue';
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
    },
    data() {
        let product = ref({});
        return {
            product,
            listProduct: [],
        };
    },

    methods: {
        async changeProduct(_id) {
            await productService.getProduct(_id).then((result) => {
                this.product = result.data;
            });
        }
    },

    async created() {
        await productService.getProduct(this.idProduct).then((result) => {
            this.product = result.data;
        });
        await productService.getIsOutstanding().then((result) => {
            this.listProduct = result.data;
        });
    }
}
</script>

<style scoped></style>