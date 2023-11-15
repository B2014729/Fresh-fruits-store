<template>
    <div class="w-50 pt-4">
        <h5 class="fw-bold fst-italic text-center" style="color: rgb(127, 127, 127);"> THÔNG TIN GIAO HÀNG</h5>
        <div>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="fullname" class="form-label text-secondary">Họ và tên Khách hàng:</label>
                    <input type="text" class="form-control" id="fullname" v-model="data.fullname">
                    <p v-if="error.fullname" class="text-warning" style="font-size: 13px;"><i
                            class="fa-solid fa-triangle-exclamation"></i> Họ tên
                        khách hàng không được để trống!</p>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label text-secondary">Số điện thoại: </label>
                    <input type="text" class="form-control" id="phone" v-model="data.phone">
                    <p v-if="error.phoneEmpty" class="text-warning" style="font-size: 13px;"><i
                            class="fa-solid fa-triangle-exclamation"></i> Số điện thoại không được để trống!</p>
                    <p v-if="error.phoneNotFormat" class="text-warning" style="font-size: 13px;"><i
                            class="fa-solid fa-triangle-exclamation"></i> Số điện thoại không đúng định dạng!</p>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label text-secondary">Địa chỉ giao hàng:</label>
                    <input type="text" class="form-control" id="address" v-model="data.address">
                    <p v-if="error.address" class="text-warning" style="font-size: 13px;"><i
                            class="fa-solid fa-triangle-exclamation"></i> Địa chỉ không được để trống!</p>
                </div>
                <button type="submit" class="btn btn-secondary float-end">Cập nhật</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InfoFrom',

    data() {
        return {
            data: {},
            error: {},
        };
    },

    methods: {
        submit() {
            if (!this.data.fullname) {
                this.error.fullname = true;
            } else {
                this.error.fullname = '';
            }
            if (!this.data.phone) {
                this.error.phoneEmpty = true;
            } else {
                this.error.phoneEmpty = false;
                const validatePhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (!validatePhone.test(this.data.phone)) {
                    this.error.phoneNotFormat = true;
                } else {
                    this.error.phoneNotFormat = false;
                }
            }

            if (!this.data.address) {
                this.error.address = true;
            } else {
                this.error.address = false;
            }

            if (!this.error.fullname && !this.error.phoneEmpty && !this.error.phoneNotFormat && !this.error.address) {
                this.$emit('submitForm', this.data);
            }
        }
    }
}

</script>

<style scoped></style>