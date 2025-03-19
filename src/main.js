import './assets/main.css'

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import VueGtm from 'vue-gtm';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
// app.use(VueGtm, {
//     id: 'GT-MQRD39VH', // Ton conteneur GTM
//     vueRouter: router
// });
app.mount('#app');
