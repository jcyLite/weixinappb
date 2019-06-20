<template>
        <div class="myinfo">
                <tk-header>详情</tk-header>
                <div class="container">
                        <tk-detail :list=list></tk-detail>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        list:[{
                                key:'部门名称',
                                value:this.$route.query.agent
                        },{
                                key:'事项名称',
                                value:this.$route.query.name
                        },{
                                key:'服务方式',
                                value:this.$route.query.server
                        },{
                                key:'事项类型',
                                value:this.$route.query.type
                        }]
                }
        }
}
</script>

<style>

</style>
