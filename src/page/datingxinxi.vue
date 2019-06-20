<template>
        <div class="datingxinxi">
                <tk-header>大厅信息</tk-header>
                <div class="container">
                        <tk-cell-one :type="type?'menu':''" @click="$router.push({
                                path:'/floorDistribute'
                        })">楼层分布图</tk-cell-one>
                        <tk-cell-one :type="type?'menu':''" @click="$router.push({
                                path:'/windowPhone'
                        })">便民电话</tk-cell-one>
                        <tk-cell-one :type="type?'menu':''" @click="daohang">一键导航</tk-cell-one>
                        <tk-cell-one @click="$router.push({
                                path:'/infoPublish'
                        })">信息发布</tk-cell-one>
                        <tk-cell-one @click="qjdt">全景大厅</tk-cell-one>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        type:false
                }
        },
        methods:{
                daohang(){
                        location.href="https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E6%99%AF%E5%BE%B7%E9%95%87%E6%9C%8D%E5%8A%A1%E5%A4%A7%E5%8E%85&c=315&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&sug_forward=&src=0&uid=5cd936409fe732cc28d7ab31&industry=life&qid=4096235403756340079/showall=1&pos=0&da_ref=listclk&da_qrtp=11&da_adtp=&da_log=&da_adquery=%E6%99%AF%E5%BE%B7%E9%95%87%E6%9C%8D%E5%8A%A1%E5%A4%A7%E5%8E%85&da_adtitle=%E6%99%AF%E5%BE%B7%E9%95%87%E5%B8%82%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C%E8%A1%8C%E6%94%BF%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83&da_adindus=%E6%94%BF%E5%BA%9C%E6%9C%BA%E6%9E%84;%E8%A1%8C%E6%94%BF%E5%8D%95%E4%BD%8D&detail_from=list&vt=map"
                },
                qjdt(){
                        location.href="http://360.toowtech.com/jdzvr/?from=groupmessage&isappinstalled=0"
                }
        }
}
</script>

<style>

</style>
