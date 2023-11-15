<template>
    <div class="container d-flex justify-content-center">
        <InfoFrom @submitForm="submit($event)"></InfoFrom>
    </div>
</template>
<script>
import InfoFrom from '@/components/InfoFrom.vue';
import authService from '@/service/auth.service';
export default {
    name: 'UpdateInfo',
    components: {
        InfoFrom,
    },

    methods: {
        async submit(data) {
            await authService.updateInfor(data, this.$cookies.get('jwt')).then((result) => {
                console.log(result);
                this.$router.push({ name: 'your-cart' });
            });
        }
    }
}
</script>

<style scoped></style>