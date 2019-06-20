import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'

import { install_cordova } from './base.js'

const store = createStore()
const router = createRouter()
const app = new Vue({
    router,
    store,
    mounted() {
        install_cordova()
    },
    render: h => h(App)
})
app.$mount('#app')