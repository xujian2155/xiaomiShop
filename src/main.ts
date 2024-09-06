import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import components from '../public/components'
import 'animate.css'
import './styles/global.scss'

(window as any).__VUE_PROD_DEVTOOLS__ = false;
(window as any).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App).use(i18n).use(store).use(router).use(ElementPlus).use(components).mount('#app')
