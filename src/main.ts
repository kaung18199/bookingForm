import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

createApp(App).use(store).use(router).component('VueDatePicker', VueDatePicker).mount('#app')
