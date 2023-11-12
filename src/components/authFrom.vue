<template>
    <div class="border border-1 rounded-3 bg-white p-3 shadow">
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">E-mail: <span class="text-danger">(*)</span></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="data.email">
                <p v-if="error.emailEmpty" class="text-warning" style="font-size: 13px;"><i
                        class="fa-solid fa-triangle-exclamation"></i> Email không được để trống!</p>
                <p v-if="error.issetEmail" class="text-warning" style="font-size: 13px;"><i
                        class="fa-solid fa-triangle-exclamation"></i> Email đã tồn tại!</p>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password:<span class="text-danger">(*)</span></label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="data.password">
                <p v-if="error.passwordEmpty" class="text-warning" style="font-size: 13px;"><i
                        class="fa-solid fa-triangle-exclamation"></i> Mật khẩu không được để trống!</p>
            </div>

            <div v-if="signup">
                <div class="mb-3">
                    <label for="passwordConfirm" class="form-label">Password confirm:<span
                            class="text-danger">(*)</span></label>
                    <input type="password" class="form-control" id="passwordConfirm" v-model="data.passwordconfirm">
                    <p v-if="error.passwordConfirmEmpty" class="text-warning" style="font-size: 13px;"><i
                            class="fa-solid fa-triangle-exclamation"></i> Xác nhận mật khẩu không được để trống!</p>
                    <p v-if="error.checkPassConfirm" class="text-warning" style="font-size: 13px;"><i
                            class="fa-solid fa-triangle-exclamation"></i> Mật khẩu không trùng khớp!</p>
                </div>
                <p v-if="signupSuccess" class="text-success" style="font-size: 13px;"><i class="fa-solid fa-check"></i>
                    Đăng kí tài khoản thành công!</p>
                <button type="submit" class="btn btn-success w-100 mb-3">Đăng kí</button>
                <div class="d-flex justify-content-end">
                    <router-link class="" :to="{ name: 'login' }">
                        Đăng nhập
                    </router-link>
                </div>
            </div>

            <div v-else>
                <div v-if="status">
                    <p class="text-warning" style="font-size: 13px;"><i class="fa-solid fa-triangle-exclamation"></i>
                        Email hoặc mật khẩu không đúng!</p>
                </div>
                <button type="submit" class="btn btn-success w-100 mb-2">Đăng nhập</button>
                <div class="d-flex justify-content-end">
                    <router-link style="font-size: 14px;" :to="{ name: 'signup' }">
                        Đăng kí ngay
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import AuthService from '@/service/auth.service.js';
export default {
    name: 'AuthForm',
    props: {
        signup: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
        },
        signupSuccess: {
            type: Boolean,
        }
    },

    setup() {

    },

    data() {
        return {
            data: {},
            error: {},
        };
    },

    methods: {
        async onSubmit() {
            if (!this.data.email) {
                this.error.emailEmpty = true;
            } else {
                this.error.emailEmpty = false;
            }
            if (!this.data.password) {
                this.error.passwordEmpty = true;
            }
            else {
                this.error.passwordEmpty = false;
            }

            if (this.signup) {
                const issetEmail = await AuthService.checkEmail(this.data.email);
                if (issetEmail.data.length > 0) {
                    this.error.issetEmail = true;
                } else {
                    this.error.issetEmail = false;
                }

                if (!this.error.passwordEmpty) {
                    if (!this.data.passwordconfirm) {
                        this.error.passwordConfirmEmpty = true;
                    }
                    else {
                        this.error.passwordConfirmEmpty = false;
                        if (this.data.password !== this.data.passwordconfirm) {
                            this.error.checkPassConfirm = true;
                        } else {
                            this.error.checkPassConfirm = false;
                        }
                    }
                }

                if (!this.error.emailEmpty && !this.error.passwordEmpty &&
                    !this.error.checkPassConfirm && !this.error.passwordConfirmEmpty &&
                    !this.error.issetEmail) {
                    this.$emit('submitForm', this.data);
                }

            } else {
                if (!this.error.emailEmpty && !this.error.passwordEmpty) {
                    this.$emit('submitForm', this.data);
                }
            }
        }
    }
}
</script>
<style></style>