import axios from 'axios';
import Qs from 'qs';
import Vue from 'vue';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
if (process.env.NODE_ENV == 'development') {
    Vue.prototype.baseURL = axios.defaults.baseURL = '/jdzzw/jkpt/'
} else {
    Vue.prototype.baseURL = axios.defaults.baseURL = '/jdzzw/jkpt/';
}
var app = new Vue();
axios.defaults.timeout = 100000;
var toast;
axios.defaults.headers = { //设置相应头
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json, text/plain'
}
axios.defaults.transformRequest = [
    d => { //对发送的数据进行处理
        d = d || {};
        var userInfo = localStorage.getItem('userInfo') || '{}';
        var uid = JSON.parse(userInfo).id;
        if (uid) {
            d.sysUserId = uid;
        }
        return Qs.stringify(d)
    }
];

axios.interceptors.request.use(
    request => {
        toast = app.$createPotToast({
            txt: '正在加载中...',
            time: 0
        })
        toast.show();
        return request
    }
)
axios.interceptors.response.use(
    res => {
        console.log('接口：')
        console.log(res.config.url)
        console.log('数据：')
        console.log(res.data)
        var d = res.data;
        toast.hide();
        if (d.message || d.msg) {
            app.$createPotToast({
                txt: d.message || d.msg,
                type: 'txt'
            }).show()
        }
        return d
    },
    err => {
        app.$createPotToast({
            txt: '数据错误',
            type: 'txt'
        }).show()
        console.log(err)
    }
)