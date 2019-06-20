<template>
        <div class="queryqlsxlistbyagent">
                <tk-header>事项按部门查询</tk-header>
                <div class="container">
                        <tk-search v-model="searchVal"></tk-search>
                        <tk-scroll>
                                <tk-cell-one
                                :filter="searchVal"
                                @click="$router.push({
                                        path:'/qlsxinfo',
                                        query:{
                                                id:item.ROW_ID
                                        }
                                })"
                                :key="index" v-for="(item,index) of rows" :data="item.NAME">
                                </tk-cell-one>
                        </tk-scroll>
                        
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        searchVal:'',
                        rows:[]
                }
        },
        methods:{
                confirm(){
                        this.$http.post('queryqlsxlistbyagent',{
                                agentcode:this.$route.query.titleid
                        }).then(d=>{
                                this.rows=d.rows;
                        })
                }
        },
        created(){
                this.$http.post('queryqlsxlistbyagent',{
                        agentcode:this.$route.query.titleid
                }).then(d=>{
                        this.rows=d.rows;
                })
        }
}
</script>
<style lang="less">

</style>


