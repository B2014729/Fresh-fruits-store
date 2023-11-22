<template>
    <th scope="row">{{ index }}</th>
    <td><img class="img-fluid rounded-circle" style="height: 100px;" :src=product.image alt="">
    </td>
    <td class="pt-5">{{ product.name }}</td>
    <td class="pt-5">
        <div>
            <button @click="removeQuantity()" class="border me-1"><i class="fa-solid fa-minus"
                    style="color: rgb(161, 161, 161); font-size: 12px;"></i></button>
            {{ quantityProduct }}
            <button @click="addQuantity()" class="border ms-1"><i class="fa-solid fa-plus"
                    style="color: rgb(161, 161, 161);  font-size: 12px;"></i></button>
        </div>
    </td>
    <td class="pt-5">{{ formatNumber(product.price) }}</td>
    <td class="pt-5">33%</td>
    <td class="fw-bold pt-5">{{ formatNumber(product.price * quantityProduct) }}</td>
    <td>
        <button class="mt-4 btn rounded-circle" @click="onDeleteAllProduct">
            <i class="fa-solid fa-circle-xmark fs-2"></i>
        </button>
    </td>
</template>
<script>
import cartService from '@/service/cart.service';
import productService from '@/service/product.service';

export default {
    name: 'CardProductCart',
    props: {
        product: {
            type: Object,
            required: true,
        },
        index: {
            type: Number
        }
    },

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
            quantityProduct: this.product.quantity,
            productDetail: {}
        };
    },

    async created() {
        await productService.getProduct(this.product.idProduct).then((result) => {
            this.productDetail = result.data;
        })
    },

    emits: ['remove', 'add', 'deleteAll'],

    methods: {
        async removeQuantity() {
            if (this.quantityProduct > 1) {
                this.$emit('remove', this.product.idProduct);
                this.quantityProduct -= 1;
                let product = {
                    idProduct: this.product.idProduct,
                    name: this.product.name,
                    price: this.product.price,
                    image: this.product.image,
                    quantity: -1,
                }
                await cartService.addToCart(this.$cookies.get('jwt'), product);
            }
        },

        async addQuantity() {
            if (this.quantityProduct < this.productDetail.quantity) {
                this.$emit('add', this.product.idProduct);
                this.quantityProduct += 1;
                let product = {
                    idProduct: this.product.idProduct,
                    name: this.product.name,
                    price: this.product.price,
                    image: this.product.image,
                    quantity: 1,
                }
                await cartService.addToCart(this.$cookies.get('jwt'), product);
            }
        },

        onDeleteAllProduct() {
            if (confirm('Bạn muốn xóa tất cả sản phẩm này ra khỏi giỏ hàng?')) {
                this.$emit('deleteAll', this.product.idProduct);
            }
        }
    },
}

</script>
<style scoped></style>