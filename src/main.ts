import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import { router } from '@/router/index'
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';


import { I_18_MESSAGES } from "@/constant/locales/messages";
import { createI18n, useI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'en',
    messages: I_18_MESSAGES,
    silentTranslationWarn: true,
    silentFallbackWarn: true
});




const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

//use it 
app.use(VueSweetalert2)
app.use(pinia);
app.use(router)
app.use(Toast)
app.use(i18n);
app.use(vuetify);
app.use(PerfectScrollbar);


app.mount('#app')
