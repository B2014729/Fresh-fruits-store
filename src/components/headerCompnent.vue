<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="w-100 row">
                <div class="col-md-3 col-3 d-flex justify-content-end ">
                    <a class="navbar-brand text-success fw-bold fs-3 px-2 border shadow " href="/">FRESH FRUITS</a>
                </div>
                <div class="col-md-9 col-9 mt-2">
                    <div class="w-100 row">
                        <div class="col-md-5 d-flex justify-content-end">
                            <form class="d-flex w-75" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit"><i
                                        class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div class="col-md-6"><button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <router-link class="nav-link" style="text-decoration: none;"
                                            :to="{ name: 'home-page' }">
                                            <i class="fa-solid fa-house me-1"></i> Trang chủ
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Giới thiệu</a>
                                    </li>
                                    <li class="nav-item">
                                        <div class="dropdown">
                                            <button class="dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Danh mục sản phẩm
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item"
                                                        :to="{ name: 'portfolio-product', params: { producttype: 'mn' } }">
                                                        Trái cây miền Nam
                                                    </router-link>
                                                </li>

                                                <li>
                                                    <router-link class="dropdown-item"
                                                        :to="{ name: 'portfolio-product', params: { producttype: 'mb' } }">
                                                        Trái cây miền Bắc
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link class="dropdown-item"
                                                        :to="{ name: 'portfolio-product', params: { producttype: 'nn' } }">
                                                        Trái cây nhập khẩu
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link class="dropdown-item"
                                                        :to="{ name: 'portfolio-product', params: { producttype: 'all' } }">
                                                        Tất cả sản phẩm
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-disabled="true">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-1 d-flex justify-content-end">

                            <button class="btn">
                                <router-link :to="{ name: 'your-cart' }">
                                    <i class="fa-solid fa-cart-shopping text-black"></i>
                                </router-link>
                            </button>


                            <div v-if="issetToken" class="btn-group ms-2">
                                <span class="text-success mt-2">user</span>
                                <button class="btn" @click="onLogout"><i
                                        class="fa-solid fa-right-from-bracket"></i></button>
                            </div>
                            <div v-else class="btn-group ms-2">
                                <button type="button" class="dropdown-toggle nav-link px-1" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-user"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <router-link :to="{ name: 'login' }" style="text-decoration: none;">
                                        <li class="border-bottom">
                                            <button class="dropdown-item" type="button"><i
                                                    class="fa-solid fa-right-to-bracket me-1"></i> Đăng nhập
                                            </button>
                                        </li>
                                    </router-link>

                                    <router-link :to="{ name: 'signup' }" style="text-decoration: none;">
                                        <li>
                                            <button class="dropdown-item" type="button"><i
                                                    class="fa-solid fa-book me-1"></i>
                                                Đăng kí
                                            </button>
                                        </li>
                                    </router-link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'HeaderComponent',
    props: {
        issetToken: {
            type: Boolean,
        }
    },

    methods: {
        onLogout() {
            if (confirm('Bạn muốn đăng xuất!')) {
                this.$cookies.remove('jwt');
                window.location.href = '/';
            }
        }
    },
}

</script>
<style scoped>
.navbar {
    background-color: #cccbc863;
}
</style>