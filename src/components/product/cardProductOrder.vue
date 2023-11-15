<template>
    <div style="height: 60px;">
        <div class="row">
            <div class="col-md-2">
                {{ index }} <img :src=product.image class="img-fluid h-50" alt="anh san pham">
            </div>
            <div class="col-md-7">
                <p class="mt-3" style="font-size: 14px;">{{ product.name }}</p>
            </div>
            <div class="col-md-3">
                <p class="mt-3" style="font-size: 14px;">x{{ product.quantity }}: {{ product.quantity * product.price }} vnd
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProductOrder',
    props: {
        product: {
            type: Object,
            required: true
        },
        index: {
            type: Number
        }
    }
}
</script>