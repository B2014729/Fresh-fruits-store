import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('@/pages/homePage.vue'),
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
        path: '/gio-hang',
        name: 'your-cart',
        component: () => import('@/pages/YourCart.vue'),
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