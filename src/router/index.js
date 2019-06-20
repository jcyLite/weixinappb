import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    var router = new Router({
        fallback: false,
        mode: process.env.VUE_ENV == 'spa' ? 'hash' : 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [{
                path: '/',
                redirect: 'daohang'
            },
            {
                path: '/daohang',
                meta: {
                    title: '导航'
                },
                component: () =>
                    import ('../page/daohang.vue')
            },
            {
                path: '/qlsxtitle', //已嵌入网页
                component: () =>
                    import ('../page/qlsxtitle.vue'),
                meta: {
                    title: '办事指南'
                }
            },
            {
                path: '/queryqlsxlistbytitle', //已嵌入网页
                component: () =>
                    import ('../page/queryqlsxlistbytitle'),
                meta: {
                    title: '根据主题查询事项列表'
                }
            },
            {
                path: '/queryqlsxlistbyagent', //已嵌入网页
                meta: {
                    title: '根据部门查询事项列表'
                },
                component: () =>
                    import ('../page/queryqlsxlistbyagent')
            },
            {
                path: '/queryqlsxbylike', //
                meta: {
                    title: '事项模糊查询列表'
                },
                component: () =>
                    import ('../page/queryqlsxbylike')
            },
            {
                path: '/qlsxinfo', //已嵌入网页
                meta: {
                    title: '事项详情'
                },
                component: () =>
                    import ('../page/qlsxinfo')
            }, {
                path: '/getbusinessinfo', //已嵌入网页
                meta: {
                    title: '办件查询'
                },
                component: () =>
                    import ('../page/getbusinessinfo')
            }, {
                path: '/reserveInfo', //已嵌入网页
                component: () =>
                    import ('../page/reserveInfo'),
                meta: {
                    title: '预约办事'
                }
            }, {
                path: '/numInfo',
                meta: {
                    title: '查看个人取号信息'
                },
                component: () =>
                    import ('../page/numInfo')
            }, {
                path: '/queryQlsx', //热点事项、一次不跑、只跑一次
                meta: {
                    title: '热点事项、一次不跑、只跑一次'
                },
                component: () =>
                    import ('../page/queryQlsx')
            }, {
                path: '/hotQlsx', //热点服务
                meta: {
                    title: '热点服务'
                },
                component: () =>
                    import ('../page/hotQlsx')
            }, {
                path: '/queryXzspQlsxlistbyagent', //行政审批
                meta: {
                    title: '行政审批'
                },
                component: () =>
                    import ('../page/queryXzspQlsxlistbyagent')
            }, {
                path: '/weekFood', //没数据
                meta: {
                    title: '本周菜谱'
                },
                component: () =>
                    import ('../page/weekFood')
            }, {
                path: '/windowPhone', //已嵌入
                meta: {
                    title: '便民电话'
                },
                component: () =>
                    import ('../page/windowPhone')
            }, {
                path: '/queryFeedback', //
                meta: {
                    title: '意见建议'
                },
                component: () =>
                    import ('../page/queryFeedback')
            }, {
                path: '/haorenhaoshi', //
                meta: {
                    title: '好人好事'
                },
                component: () =>
                    import ('../page/haorenhaoshi')
            }, {
                path: '/getBusinessListTop',
                meta: {
                    title: '办件公告'
                },
                component: () =>
                    import ('../page/getBusinessListTop')
            }, {
                path: '/textdetail',
                meta: {
                    title: '详情'
                },
                component: () =>
                    import ('../page/textdetail')
            }, {
                path: '/login',
                meta: {
                    title: '登陆'
                },
                component: () =>
                    import ('../page/login')
            }, {
                path: '/center',
                meta: {
                    title: '中心管理'
                },
                component: () =>
                    import ('../page/center')
            }, {
                path: '/datingxinxi',
                meta: {
                    title: '大厅信息'
                },
                component: () =>
                    import ('../page/datingxinxi.vue')
            }, {
                path: '/queryQuestionList',
                meta: {
                    title: '智能问答与常见问题列表'
                },
                component: () =>
                    import ('../page/queryQuetionList')
            }, {
                path: '/queryQuestionInfo',
                meta: {
                    title: '常见问题详情'
                },
                component: () =>
                    import ('../page/queryQuetionInfo')
            }, {
                path: '/saveConsulteComplaint',
                meta: {
                    title: '在线咨询与投诉'
                },
                component: () =>
                    import ('../page/saveConsulteComplaint')
            }, {
                path: '/queryReplyListByOpenId',
                meta: {
                    title: '信件答复列表'
                },
                component: () =>
                    import ('../page/queryReplyListByOpenId')
            }, {
                path: '/manualQA',
                meta: {
                    title: '人工问答'
                },
                component: () =>
                    import ('../page/manualQA')
            }, {
                path: '/saveExpressDelivery',
                meta: {
                    title: '快递邮寄下单'
                },
                component: () =>
                    import ('../page/saveExpressDelivery')
            }, {
                path: '/floorDistribute',
                meta: {
                    title: '景德镇政务服务中心楼层信息分布图'
                },
                component: () =>
                    import ('../page/floorDistribute')
            }, {
                path: '/infoPublish',
                meta: {
                    title: '信息发布'
                },
                component: () =>
                    import ('../page/infoPublish')
            }, {
                path: '/foodDisplayList',
                meta: {
                    title: '今日可购'
                },
                component: () =>
                    import ('../page/foodDisplayList')
            }, {
                path: '/myinfo',
                meta: {
                    title: '详情'
                },
                component: () =>
                    import ('../page/myinfo')
            }, {
                path: '/querySunWorkQlsx',
                meta: {
                    title: '阳光政务'
                },
                component: () =>
                    import ('../page/querySunWorkQlsx')
            }, {
                path: '/reserveList',
                meta: {
                    title: '预约列表'
                },
                component: () =>
                    import ('../page/reserveList')
            }, {
                path: '/punchRecord',
                meta: {
                    title: '打卡记录查询'
                },
                component: () =>
                    import ('../page/punchRecord')
            }, {
                path: '/getApprove',
                meta: {
                    title: '审批记录查询'
                },
                component: () =>
                    import ('../page/getApprove')
            }, {
                path: '/repCardApprove',
                meta: {
                    title: '补卡申请记录查询'
                },
                component: () =>
                    import ('../page/repCardApprove')
            }, {
                path: '/queryAdminMatterList',
                meta: {
                    title: '行政中心及列表事项'
                },
                component: () =>
                    import ('../page/queryAdminMatterList')
            },
            {
                path: '/repCard',
                meta: {
                    title: '补卡申请'
                },
                component: () =>
                    import ('../page/repCard')
            }, {
                path: '/queryPersonalReplyList',
                meta: {
                    title: '信件答复'
                },
                component: () =>
                    import ('../page/queryPersonalReplyList')
            }, {
                path: '/leave',
                meta: {
                    title: '请假申请'
                },
                component: () =>
                    import ('../page/leave')
            }, {
                path: '/myApply',
                meta: {
                    title: '我的申请'
                },
                component: () =>
                    import ('../page/myApply')
            }, {
                path: '/myWorkRigest',
                meta: {
                    title: '我的月度考勤记录'
                },
                component: () =>
                    import ('../page/myWorkRigest')
            }, {
                path: '/myAttendance',
                meta: {
                    title: '我的考勤月报'
                },
                component: () =>
                    import ('../page/myAttendance')
            }, {
                path: '/myWorkRigestDetail',
                meta: {
                    title: '补卡申请'
                },
                component: () =>
                    import ('../page/myWorkRigestDetail')
            }, {
                path: '/myWorkRigestd',
                meta: {
                    title: '我的月度考勤记录'
                },
                component: () =>
                    import ('../page/myWorkRigestd')
            }

        ]
    })
    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            // document.title = to.meta.title
        }
        setTimeout(() => {
            next()
        }, 0)

    })
    return router;
}