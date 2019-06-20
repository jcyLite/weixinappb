<template>
        <div class="queryqlsxlistbytitle">
                <tk-header>事项列表</tk-header>
                <div class="container">
                        <tk-search @keydown.enter.native="confirm" v-model="searchVal"></tk-search>
                        <tk-button @click="active=!active">{{!active?'点击显示更多字段':'点击显示较少字段'}}</tk-button>
                        <tk-scroll>
                                <tk-cell :filter="searchVal" v-if="active" @click="$router.push({
                                        path:'/qlsxinfo',
                                        query:{
                                                id:item.ROW_ID
                                        }
                                })" 
                                :title="['事项编码','事项名称','事项类型','承办单位','承办部门编号']"
                                :data="[
                                        item.ITEM_CODE,
                                        item.NAME,
                                        $store.state.type[item.TYPE],
                                        item.AGENT_NAME,
                                        item.AGENT_CODE
                                ]"
                                        v-for="(item,index) of rows"
                                >

                                </tk-cell>
                                <tk-cell-one 
                                        v-if="!active"
                                        :filter="searchVal" @click="$router.push({
                                        path:'/qlsxinfo',
                                        query:{
                                                id:item.ROW_ID
                                        }
                                })" :key="index" v-for="(item,index) of rows" :data="item.NAME">            
                                </tk-cell-one>
                                <tk-nodata v-if="!rows.length"></tk-nodata>
                        </tk-scroll>
                </div>
        </div>
</template>
<script>
export default {
        data(){
                return {
                        active:false,
                        searchVal:'',
                        rows:[]
                }
        },
        methods:{
                confirm(){
                        this.$http.post('/queryqlsxlistbytitle',{
                                name:this.searchVal,
                                titleid:this.$route.query.titleid
                        }).then(d=>{
                                this.rows=d.rows
                        })    
                }
        },
        created(){
                this.$http.post('/queryqlsxlistbytitle',{
                         titleid:this.$route.query.titleid
                }).then(d=>{
                        this.rows=d.rows
                })
        } 
}
</script>

<style lang="less">
        .queryqlsxlistbytitle{
                .tk-scroll{
                        height:calc(100vh - 40px);
                }
        }
</style>


