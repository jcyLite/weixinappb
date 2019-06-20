<template>
        <div class="qlsxinfo">
                <tk-header>事项详情</tk-header>
                <div class="container">
                        <tk-scroll>
                                <tk-detail :list=list></tk-detail>
                                <div style="height:20px;"></div>
                                <tk-cell-one :spread="item"  v-for="(item,index) of rows" :key="index">
                                        {{item}}
                                </tk-cell-one>
                                <!-- <div style="height:20px;"></div>
                                <tk-button @click="shoucang">{{!active?'我要收藏':'取消收藏'}}</tk-button> -->
                                <div style="height:20px;"></div>
                                <tk-cell-four :data="{
                                        title:item.NAME,
                                        content:item.PUBLISHER,
                                        status:'',
                                        time:item.ACCEPT_STANDARD
                                }" v-for="(item,index) of sqclrows" :key="'b'+index"></tk-cell-four>
                        </tk-scroll>
                </div>
        </div>        
</template>
<script>
export default {
         data(){
                return {
                        list:[],
                        rows:[],
                        sqclrows:null,
                        active:false
                }
        },
        methods:{
                confirm(){

                },
                shoucang(data){
                        var localStr=localStorage.getItem('shoucang')||'[]';
                        var local=JSON.parse(localStr);
                        if(!this.active){
                                local.push({
                                        id:this.$route.query.id,
                                        name:this.list[2].value
                                })
                        }else{
                                var a;
                                local.forEach((item,index)=>{
                                        if(item.id==this.$route.query.id){
                                                a=true;
                                        }
                                })
                                a&&local.splice(index,1)
                        }
                        this.active=!this.active;
                        localStorage.setItem('shoucang',JSON.stringify(local));
                }
        },
        mounted(){
              var localStr=localStorage.getItem('shoucang')||'[]';
                var local=JSON.parse(localStr);
                local.forEach(item=>{
                        if(item.id==this.$route.query.id){
                                this.active=true
                        }
                })
        },
         created(){
                this.$http.post('qlsxinfo',{
                        id:this.$route.query.id
                }).then(d=>{
                        this.rows=d.sltj;
                        this.sqclrows=d.sqclrows;
                        this.list=[{
                                key:'事项编码',
                                detail:d.itemcode,
                                value:d.itemcode
                        },{
                                key:'办件类型',
                                value:['','承诺件','即办件','转报件','联报件','初审件'][d.assort]
                        },{
                                key:'事项名称',
                                value:d.qlsxname,
                                detail:d.qlsxname
                        },{
                                key:'承办单位',
                                value:d.agentname
                        },{
                                key:'事项类型',
                                value:this.$store.state.type[d.type]
                        },{
                                key:'承办单位',
                                value:d.orgname
                        },{
                                key:'承诺时限',
                                value:d.agreetime+'天'
                        },{
                                key:'法定时限',
                                value:d.lawtime+'天'
                        },{
                                key:'是否收费',
                                value:['不收费','收费'][d.ischarge]
                        }]
                })
        }
}
</script>
<style lang="less">
        .qlsxinfo{
                .tk-scroll{
                        height:calc(100vh);
                }
        }
        
</style>


