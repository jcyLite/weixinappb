import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import './base.js'
import { install_cordova } from './base.js'
export function createApp() {
    // create store and router instances
    const store = createStore()
    const router = createRouter()

    // sync the router with the vuex store.
    // this registers `store.state.route`
    sync(store, router);
    // create the app instance.
    // here we inject the router, store and ssr context to all child components,
    // making them available everywhere as `this.$router` and `this.$store`.
    const app = new Vue({
        router,
        store,
        mounted() {
            install_cordova()
        },
        render: h => h(App)
    })

    // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.
    return { app, router, store }
}