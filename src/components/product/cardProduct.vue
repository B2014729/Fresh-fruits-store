<template>
    <div class="card-product border border-success rounded-5 p-2 mt-4">
        <div style="width: 45px;">
            <p class="text-center rounded-circle border py-2 px-1 m-0" style="background-color: rgb(215, 121, 121);">
                -33%
            </p>
        </div>
        <router-link :to="{ name: 'detail-product', params: { idProduct: product._id } }">
            <img @click="onCard" class="img-fluid px-1" :src="product.image" alt="anh san pham">
        </router-link>
        <div class="w-100 mt-3 d-flex justify-content-center">
            <div>
                <span class="name-product">{{ product.name }}</span>
                <p class="text-center text-danger">{{ product.price }} đ</p>
            </div>
        </div>
        <div class="w-100 d-flex justify-content-between px-2">
            <div class="mt-2">
                <button @click="removeQuantity()" class="border me-1"><i class="fa-solid fa-minus"
                        style="color: rgb(161, 161, 161); font-size: 12px;"></i></button>
                {{ quantity }}
                <button @click="addQuantity()" class="border ms-1"><i class="fa-solid fa-plus"
                        style="color: rgb(161, 161, 161);  font-size: 12px;"></i></button>
            </div>
            <button @click="addToCart()" class="btn btn-success rounded-5">
                <i class="fa-solid fa-cart-shopping"></i>
                Thêm vào giỏ
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cardProduct',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            quantity: 1,
        };
    },
    methods: {
        removeQuantity() {
            if (this.quantity > 1) {
                this.quantity -= 1;
            } else {
                this.quantity = 1;
            }
        },

        addQuantity() {
            this.quantity += 1;
        },

        addToCart() {
            this.quantity = 1;
            alert('Đã thêm vào giỏ hàng');
        },

        onCard() {
            this.$emit('onCard', this.product._id);
        }
    },
}
</script>
<style scoped>
.card-product {
    min-height: 468px;
}

.card-product:hover {
    box-shadow: rgba(1, 143, 1, 0.373) 2px 2px 2px 2px;
}

.name-product {
    font-weight: bold;
    font-size: 18px;
}

.button-static {
    border: none;
    background-color: white;
}
</style>