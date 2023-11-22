import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('@/pages/homePage.vue'),
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login.vue'),
    },


    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/pages/signup.vue'),
    },

    {
        path: '/danh-muc-san-pham/:producttype',
        name: 'portfolio-product',
        props: true,
        component: () => import('@/pages/portfolioProduct.vue'),
    },

    {
        path: '/chi-tiet-san-pham/:idProduct',
        name: 'detail-product',
        props: true,
        component: () => import('@/pages/detailProduct.vue'),
    },

    {
        path: '/cap-nhat-thong-tin',
        name: 'update-info',
        component: () => import('@/pages/UpdateInfo.vue'),
    },

    {
        path: '/gio-hang',
        name: 'your-cart',
        component: () => import('@/pages/YourCart.vue'),
    },

    {
        path: '/danh-sach-don-hang',
        name: 'order-list',
        component: () => import('@/pages/orderList.vue'),
    },

    {
        path: '/thong-tin-don-hang/:idOrder',
        name: 'order-detail',
        component: () => import('@/pages/orderPage.vue'),
        props: true,
    },

    {
        //Khong tim thay url
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: import('@/pages/NotFound.vue'),
    }
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default router;