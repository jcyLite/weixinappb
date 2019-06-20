<template>
        <div class="getbusinessinfo">
                <tk-header>根据流水号办件查询</tk-header>
                <div class="container">
                        <img style="width:100%;" src="../image/timg.jpg" alt="">
                        <tk-form style="margin-top:8px;" :list="list"></tk-form>
                        <tk-button @click="search">查询</tk-button>
                        <tk-scroll>
                                <tk-cell-four :data="{
                                        title:item.blr,
                                        time:item.jstime,
                                        status:item.hjname,
                                        content:item.clyj
                                }" v-for="item of rows">
                                
                                </tk-cell-four>    
                        </tk-scroll>
                        
                </div>
        </div>
</template>
<script>
export default {
        data(){
                return {
                        rows:[],
                        list:[{
                                name:'输入流水号',
                                model:this.$route.query.receive_number||'',
                                type:'input'
                        }]
                }
        },
        methods:{
                search(){
                        this.$http.post('getbusinessinfo',{
                                receiveNumber:this.list[0].model
                        }).then(d=>{
                                this.rows=d.rows;
                        })
                }
        },
        created(){ 
        }
}
</script>
<style lang="less">
.tk-scroll{
        height:calc(100vh - 100px);
}
</style>
