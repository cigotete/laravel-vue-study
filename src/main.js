import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://laravel-study-vue-api-backend.test/api/v2'

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
