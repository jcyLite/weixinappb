<template>
        <div class="daohang">
                <tk-scroll>
                        <tk-cell-one @click="$router.push('/qlsxtitle')">办事指南</tk-cell-one>
                        <tk-cell-one @click="$router.push('/hotQlsx')">热点服务</tk-cell-one>
                        <tk-cell-one @click="$router.push('/getBusinessListTop')">办件公告</tk-cell-one>
                        <tk-cell-one @click="$router.push('/queryQlsx')">阳光政务</tk-cell-one>
                        <tk-cell-one @click="$router.push('/queryXzspQlsxlistbyagent')">行政审批</tk-cell-one>
                        <tk-cell-one @click="$router.push('/datingxinxi')">大厅信息</tk-cell-one>
                        <tk-cell-one @click="$router.push('/getbusinessinfo')">办件查询</tk-cell-one>
                        <tk-cell-one @click="$router.push('/queryQuestionList')">常见问题</tk-cell-one>
                        <tk-cell-one @click="$router.push('/saveConsulteComplaint')">咨询投诉</tk-cell-one>
                        <tk-cell-one @click="$router.push('/reserveList')">在线预约</tk-cell-one>
                        <tk-cell-one @click="$router.push('/center')">中心管理</tk-cell-one>
                </tk-scroll>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less">

</style>
