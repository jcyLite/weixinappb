import Vue from 'vue'
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
import thank from '../public/tk_components';
Vue.use(thank)
import tchart from '../public/tchart'
Vue.use(tchart)

export function install_cordova() {
    if (window.navigator.platform != 'Win32') {
        var isAndroid = /Android/.test(navigator.userAgent);
        var isIos = /iPhone/.test(navigator.userAgent);
        Vue.prototype.isAndroid = isAndroid;
        Vue.prototype.isIos = isIos;
        var body = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.charset = "GBK";
        if (isIos) {
            script.src = "./static/cordova-ios/cordova.js";
        } else if (isAndroid) {
            script.src = "./static/cordova-android/cordova.js";
        }
        body.appendChild(script);

    }
}