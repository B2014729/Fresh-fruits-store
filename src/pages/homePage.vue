<template>
    <div class="banner d-flex justify-content-center">
        <div class="content w-100 d-flex justify-content-end">
            <div>
                <p class="name float-end">Fresh Fruits</p>
                <div class="w-50 float-end">
                    <p style="color: rgb(211, 211, 211);" class="text-center"> <span class="fw-bold">Fresh Fruits</span>
                        là một cửa hàng
                        chuyên kinh
                        doanh các loại trái cây
                        tươi ngon và các
                        sản phẩm liên
                        quan. Các cửa
                        hàng trái cây thường cung cấp một loạt các loại trái cây tươi, từ trái cây cơ bản như táo, lê,
                        cam, nho đến các loại trái cây hiếm hoi và nhập khẩu như kiwi, dứa, và cây lựu. Mục tiêu của cửa
                        hàng trái cây là cung cấp cho khách hàng các sản phẩm trái cây chất lượng cao, tươi ngon, và
                        tươi ngon.
                    </p>
                </div>
            </div>
        </div>
    </div>


    <div class="container mt-5">
        <h4 class="fw-bold ms-4 text-center" style="color: rgb(0, 0, 0);"><span
                style="color: rgba(120, 120, 120, 0.471);">______________________________</span> SẢN PHẨM NỔI BẬT <span
                style="color: rgba(120, 120, 120, 0.471);">______________________________</span>
        </h4>
        <div class="row">
            <div class="col-md-3" v-for="(product, index) in listProduct" :key="index">
                <CardProduct :product=product />
            </div>
        </div>
        <div class="w-100 d-flex justify-content-center my-4">
            <button class="show-add btn border border-success rounded-5">Xem thêm <i
                    class="fa-solid fa-chevron-down"></i></button>
        </div>
    </div>

    <div class="container-fluid row py-4" style="background-color: #cccbc863">
        <div class=" col-md-8 col-sm-6 col-12">
            <h4 class="fw-bold ms-4 text-center" style="color: rgb(0, 0, 0);"><span
                    style="color: rgba(120, 120, 120, 0.471);">____________________</span> TIN TỨC <span
                    style="color: rgba(120, 120, 120, 0.471);">____________________</span>
            </h4>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>

        </div>
        <div class="col-md-3 col-sm-6 col-12 d-flex justify-content-center">
            <div>
                <h5 class="fw-bold ms-4 text-center" style="color: rgb(0, 0, 0);">
                    <span style="color: rgba(120, 120, 120, 0.471);">_____</span> LIÊN HỆ TƯ VẤN <span
                        style="color: rgba(120, 120, 120, 0.471);">_____</span>
                </h5>
                <form action="" class="border border-3 rounded-4 p-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInpu" class="form-label">Phone number:</label>
                        <input type="email" class="form-control" id="exampleFormControlInpu" placeholder="0123456789">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea" class="form-label">Description:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea" rows="3"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <hr>

    <iframe class="w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.622877822345!2d105.716370455472!3d10.034268928723716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699237966629!5m2!1svi!2s"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<script>
import CardProduct from '@/components/product/cardProduct.vue';
import NewsCard from '@/components/newsComponent.vue';

import productService from '@/service/product.service.js';
export default {
    name: 'HomePage',
    components: {
        CardProduct,
        NewsCard,
    },

    data() {
        return {
            listProduct: [],
        };
    },

    async created() {
        try {
            await productService.getIsOutstanding().then((result) => {
                this.listProduct = result.data;
            });
        } catch (error) {
            console.log(error);
        }
    }
}

</script>
<style scoped>
.banner {
    background: url('../assets/image/bg-home.jpg') no-repeat center center;
    background-size: cover;

}

.content {
    padding: 140px 300px;
}

.name {
    color: white;
    font-size: 130px;
    font-family: 'Oranienbaum', serif;
}

.show-add:hover {
    background-color: rgba(28, 152, 0, 0.705);
}
</style>