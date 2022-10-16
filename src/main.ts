import App from './App.vue';
import router from './router';
import './assets/styles/app.scss';
import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
