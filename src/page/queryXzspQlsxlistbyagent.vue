<template>
        <div class="queryXzspQlsxlistbyagent">
                <tk-header>根据部门查询行政审批事项列表</tk-header>
                <div class="container">
                        <tk-form :list=list></tk-form>
                        <!-- <tk-button @click="search">查询</tk-button> -->
                        <tk-search v-model="searchVal"></tk-search>
                        <tk-scroll>
                                <tk-cell-one @click="$router.push({
                                        path:'/qlsxinfo',
                                        query:{
                                                id:item.ROW_ID
                                        }
                                })"  :filter='searchVal' :key=index v-for="(item,index) of rows" :data="item.NAME">
                                </tk-cell-one>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        code:[],
                        codeAct:0,
                        searchVal:'',
                        rows:[],
                        list:[{
                                type:'select',
                                model:'景德镇市交通运输局',
                                select:[],
                                name:'部门选择',
                                success:(i)=>{
                                        this.codeAct=i[0];
                                        this.a();
                                }
                        }]
                }
        },
        methods:{
                a(){
                        this.$http.post('queryXzspQlsxlistbyagent',{
                                agentcode:this.code[this.codeAct]
                        }).then(d=>{
                                this.rows=d.rows;
                        })
                }
        },
        created(){
                this.$http.post('agent').then(d=>{
                        var arr=[]
                        d.rows.forEach(item=>{
                                arr.push(item.AGENT_NAME)
                                this.code.push(item.AGENT_CODE)
                        })
                        this.list[0].select=arr;
                        this.a();
                })
        }

}
</script>

<style lang="less">
        .queryXzspQlsxlistbyagent{
                .tk-scroll{
                        height:calc(100vh - 110px);
                }
        }
</style>

