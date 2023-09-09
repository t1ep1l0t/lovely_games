import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from "@/store/store";
import i18n from "@/plugins/i18n.config";
import vuetify from "@/plugins/vuetify.config";

import './assets/main.scss'

const app = createApp(App)

app
    .use(router)
    .use(store, key)
    .use(i18n)
    .use(vuetify)
    .mount('#app')
