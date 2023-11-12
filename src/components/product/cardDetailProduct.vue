<template>
    <div class="row">
        <div class="col-md-4 col-sm-6 col-12">
            <img class="img-fluid" :src="product.image" alt="anh san pham">
        </div>
        <div class="col-md-6 col-sm-6 col-12">
            <h4 class="text-success fst-italic">{{ product.name }}</h4>
            <p class="text-success">____</p>
            <span class="fs-3 fw-bold">{{ product.price }} vnd</span>
            <p class="text-success">{{ product.description }}</p>
            <ul>
                <li><span class="fw-bold">Quy cách:</span> {{ product.specifications }} kg.</li>
                <li><span class="fw-bold">Hạn sử dụng:</span> {{ product.hsd }} kể từ ngày thu hoạch.</li>
                <li><span class="fw-bold">Xuất xứ:</span> {{ product.origin }}.</li>
            </ul>
            <div class="w-50 d-flex justify-content-between px-2">
                <div class="mt-2">
                    <button @click="removeQuantity()" class="border me-1"><i class="fa-solid fa-minus"
                            style="color: rgb(161, 161, 161); font-size: 12px;"></i></button>
                    {{ quantity }}
                    <button @click="addQuantity()" class="border ms-1"><i class="fa-solid fa-plus"
                            style="color: rgb(161, 161, 161);  font-size: 12px;"></i></button>
                </div>
                <button @click="addToCart()" class="btn btn-success">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardDetailProduct',
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
    },
}
</script>
<style scoped>
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