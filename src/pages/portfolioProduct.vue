<template>
    <div class="container w-75">
        <div class="py-3">
            <h6 style="color: rgb(127, 127, 127);">
                <router-link class="text-secondary" style="text-decoration: none;" :to="{ name: 'home-page' }">Trang chủ
                </router-link>
                <i class="fa-solid fa-chevron-right"></i>
                <router-link class="text-secondary" style="text-decoration: none;"
                    :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }"> Danh mục sản
                    phẩm</router-link>
            </h6>
        </div>
        <p class="text-secondary">Fresh Fruits cam kết, giá thành trái cây nhập khẩu tốt hơn nhưng chất lượng không thay
            đổi. Fresh Fruits nói
            không với hàng
            Trung Quốc.</p>
        <h5 v-if="producttype == 'mn'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">
            TRÁI CÂY MIỀN NAM___
        </h5>
        <h5 v-if="producttype == 'mb'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">
            TRÁI CÂY MIỀN BẮC___
        </h5>
        <h5 v-if="producttype == 'nn'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">
            TRÁI CÂY NHẬP KHẨU___
        </h5>
        <h5 v-if="producttype == 'all'" class="fw-bold fst-italic" style="color: rgb(127, 127, 127);">
            TẤT CẢ SẢN PHẨM___
        </h5>
        <div class="row">
            <div class="col-md-3" v-for="(product, index) in listProduct" :key="index">
                <CardProduct :product=product />
            </div>
        </div>
    </div>
</template>

<script>
import CardProduct from '@/components/product/cardProduct.vue';

import productService from '@/service/product.service';
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

    data() {
        return {
            listProduct: {},
        };
    },

    methods: {

        async updateData(producttype) {
            if (producttype === 'all') {
                await productService.getProductList().then((result) => {
                    this.listProduct = result.data;
                });
            } else {
                await productService.getProductWithType(producttype).then((result) => {
                    this.listProduct = result.data;
                })
            }
        }
    },

    async created() {
        if (this.producttype === 'all') {
            await productService.getProductList().then((result) => {
                this.listProduct = result.data;
            });
        } else {
            await productService.getProductWithType(this.producttype).then((result) => {
                this.listProduct = result.data;
            })
        }
    },


    async beforeRouteUpdate(to, from, next) {
        const producttype = to.params.producttype;
        this.updateData(producttype);
        next()
    }
}


</script>

<style scoped></style>