import Vue from 'vue'
import Vuex from 'vuex'
import './server.js'
Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            activeType: null,
            id: 'admin',
            type: {
                XK: '行政许可',
                CF: '行政处罚',
                QZ: '行政强制',
                ZS: '行政征收',
                JF: '行政给付',
                CJ: '行政裁决',
                QR: '行政确认',
                JL: '行政奖励',
                QT: '其他行政权力',
                ZJJG: '中介机构',
                GG: '公共服务'
            },
            agent: [],
            tablist: [{
                    label: '个人',
                    list: []
                },
                {
                    label: '法人',
                    list: []
                },
                {
                    label: '部门',
                    list: []
                }
            ],
            queryqlsxlistbytitle: [],
            hotQlsxData: []
        }
    })
}