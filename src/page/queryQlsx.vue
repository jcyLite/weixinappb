<style lang="less">
        .tk-scroll{
                height:calc(100vh - 50px);
        }
</style>

<template>
        <div class="queryQlsx">
                <tk-header>热点事项、一次不跑、只跑一次</tk-header>
                <div class="container">
                        <tk-tab-container :active=active v-model="tablist">
                                
                                <div :key=indexa v-for="(itema,indexa) of tablist" :slot="indexa">
                                        <tk-search v-model="searchVal"></tk-search>
                                        <tk-button @click="oactive=!oactive">{{!oactive?'显示更多字段':'显示较少字段'}}</tk-button>
                                        <tk-scroll>
                                                <tk-cell v-show="oactive"
                                                        @click="indexa==0?$router.push({
                                                                path:'/qlsxinfo',
                                                                query:{
                                                                        id:item.rowid
                                                                }
                                                        }):$router.push({
                                                                path:'/myinfo',
                                                                query:{
                                                                        agent:item.agent,
                                                                        name:item.name,
                                                                        server:item.server,
                                                                        type:item.type
                                                                }
                                                        })"
                                                        :title="indexa==0?['部门名称','事项名称','事项类型']
                                                                :indexa==1?['主 事 项','子 事 项','事项类型','受理部门','服务方式']
                                                                :['主 事 项','子 事 项','事项类型','受理部门']"
                                                        :data="indexa==0?[
                                                                item.agentName,
                                                                item.name,
                                                                $store.state.type[item.type]
                                                        ]:indexa==1?[
                                                                item.name,
                                                                item.childName||'无',
                                                                item.type,
                                                                item.agent,
                                                                item.server||'无'
                                                        ]:[
                                                                item.name,
                                                                item.childName||'无',
                                                                item.type,
                                                                item.agent
                                                        ]"
                                                        :filter="searchVal" v-for="(item,index) of itema.list">

                                                </tk-cell>
                                                <tk-cell-four v-show="!oactive" :filter="searchVal" :data="indexa==0?{
                                                        title:item.name,
                                                        status:'',
                                                        content:item.agentName,
                                                        time:''
                                                }:{
                                                        title:item.name,
                                                        status:item.server,
                                                        content:item.type,
                                                        time:item.agent
                                                }" 
                                                @click="indexa==0?$router.push({
                                                        path:'/qlsxinfo',
                                                        query:{
                                                                id:item.rowid
                                                        }
                                                }):$router.push({
                                                        path:'/myinfo',
                                                        query:{
                                                                agent:item.agent,
                                                                name:item.name,
                                                                server:item.server,
                                                                type:item.type
                                                        }
                                                })"
                                                :key=index
                                                v-for="(item,index) of itema.list">

                                                </tk-cell-four>
                                        </tk-scroll>
                                </div>
                                
                        </tk-tab-container>
                </div>
        </div>
</template>
<script>
export default {
        data(){
                return {
                        active:0,
                        oactive:false,
                        searchVal:'',
                        tablist:[
                                {
                                        label:'热点事项',
                                        list:[]
                                },
                                {
                                        label:'一次不跑',
                                        list:[]
                                },
                                {
                                        label:'只跑一次',
                                        list:[]
                                }
                        ]
                }
        },
        created(){
                this.$http.post('queryQlsx',{
                        type:1 
                }).then(d=>{
                        this.tablist[0].list=d.rows;
                })
                this.$http.post('noOneQlsx',{
                        type:2
                }).then(d=>{
                        this.tablist[1].list=d.rows;
                })
                this.$http.post('onlyOneQlsx',{
                        type:3
                }).then(d=>{
                        this.tablist[2].list=d.rows;
                })
        }
}
</script>

