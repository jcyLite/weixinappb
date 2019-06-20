<template>
        <div class="queryqlsxbylike">
                <tk-header>事项模糊查询列表</tk-header>
                <div class="container">
                        <tk-search @keydown.enter.native="confirm" v-model="searchVal"></tk-search>
                        <tk-cell-one @click="$router.push({
                                path:'/qlsxinfo',
                                query:{
                                        id:item.ROW_ID
                                }
                        })" :key="index" v-for="(item,index) of rows">
                                {{item.NAME}}            
                        </tk-cell-one>
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

                }
        },
         created(){
                this.$http.post('queryqlsxbylike').then(d=>{
                        this.rows=d.rows;
                })
        }
}
</script>
<style>

</style>


