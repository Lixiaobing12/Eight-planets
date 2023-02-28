import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import { store } from './store'
import i18n from './utils/i18n/setupI18n'
import 'animate.css';
// 通用字体
import 'vfonts/Lato.css'
import {
    // create naive ui
    create
} from 'naive-ui'

const naive = create({})
const app = createApp(App)
app.use(router).use(i18n).use(store).use(naive).mount('#app');