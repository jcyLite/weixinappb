<template>
        <div class="getApprove">
                <tk-header>审批列表结果查询</tk-header>
                <div class="container">
                        <tk-scroll>
                                <tk-cell :title="['员工姓名','员工编号']" :data='[
                                        item.name,
                                        item.pin
                                ]' v-for="item of rows">

                                </tk-cell>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        rows:[]
                }
        },
        created(){
                this.$http.get('getApprove').then(d=>{
                        this.rows=d.list;
                })
        }
}
</script>

<style lang="less">
        .getApprove{
                .tk-scroll{
                        height:calc(100vh);
                }
        }
</style>
