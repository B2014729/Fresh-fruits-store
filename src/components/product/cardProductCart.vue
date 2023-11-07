<template>
    <tr>
        <th scope="row">{{ product.id }}</th>
        <td><img class="img-fluid rounded-circle" style="height: 100px;"
                src="https://tfruit.com.vn/wp-content/uploads/2019/08/autum-crips-m%E1%BB%B9.jpg" alt="">
        </td>
        <td class="pt-5">{{ product.name }}</td>
        <td class="pt-5">
            <div class="mt-2">
                <button @click="removeQuantity()" class="border me-1"><i class="fa-solid fa-minus"
                        style="color: rgb(161, 161, 161); font-size: 12px;"></i></button>
                {{ quantity }}
                <button @click="addQuantity()" class="border ms-1"><i class="fa-solid fa-plus"
                        style="color: rgb(161, 161, 161);  font-size: 12px;"></i></button>
            </div>
        </td>
        <td class="pt-5">330000</td>
        <td class="pt-5">33%</td>
        <td class="fw-bold pt-5">{{ tong }}</td>
        <td><button class="pt-4 btn rounded-circle w-100 d-flex justify-content-end"><i
                    class="fa-solid fa-circle-xmark fs-2"></i></button>
        </td>
    </tr>
</template>
<script>

export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
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
    }
}

</script>
<style scoped></style>