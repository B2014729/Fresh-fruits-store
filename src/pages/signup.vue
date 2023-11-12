<template>
    <div class="container w-75 mt-3 d-flex justify-content-center">
        <div class="w-25">
            <h5 class="text-secondary fw-bold text-center">___ĐĂNG KÍ___</h5>
            <AuthForm :signup="true" :signupSuccess="status" @submitForm="submit($event)" />
        </div>
    </div>
</template>
<script>
import AuthForm from '@/components/authFrom.vue';
import AuthService from '@/service/auth.service';
export default {
    name: 'LoginPages',

    components: {
        AuthForm,
    },

    data() {
        return {
            status: false,
        }
    },

    methods: {
        async submit(data) {
            try {
                await AuthService.signup(data).then((result) => {
                    if (result.statusCode == 200) {
                        this.status = true;
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
<style scoped>
.container {
    height: 500px;
    background: url('https://t4.ftcdn.net/jpg/05/51/74/67/360_F_551746767_ArWphuOtKKju7BIL2p3i3eYR1Tczd0IL.jpg') no-repeat center center;
    background-size: cover;
}
</style>