import { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router/index.js';

const app = createApp(App)
app.use(router);
app.use(VueCookies);
app.mount('#app');