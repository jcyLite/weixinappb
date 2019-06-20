<style lang="less">
        .getBusinessListTop{
                .tk-scroll-auto{
                        height:calc(100vh - 385px);
                }
        }
</style>
<template>
        <div class="getBusinessListTop">
                <tk-header>办件公告</tk-header>
                <div class="container">
                        <div style="color:#333;font-size:18px;text-align:center;">
                                景德镇市行政许可事项办件统计
                        </div>
                        <div style="margin-top:20px;">
                                <div>总办件数：{{totalFinish}}件</div>
                                <div>总收件数：{{totalReceive}}件</div>
                                
                        </div>
                        <tchart-three :data=data></tchart-three>
                        <tk-scroll-auto>
                                <tk-cell-four :filter="searchVal" v-for="item of rows" 
                                        :data="{
                                                title:item.item_name,
                                                status:item.org_name,
                                                time:'办结时间：'+timestampToDate(item.submit_time),
                                                content:'承诺时间：'+timestampToDate(item.time_limit)
                                        }"
                                       
                                ></tk-cell-four>
                        </tk-scroll-auto>  
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        searchVal:'',
                        rows:[],
                        data:{
                                a:{
                                        title:'月份',
                                        list:[]
                                },
                                b:{
                                        title:'办结数',
                                        list:[]
                                },
                                c:{
                                        title:'收件数',
                                        list:[]
                                }
                        },
                        totalFinish:'',
                        totalReceive:''
                }
        },
        created(){
                this.$http.post('getBusinessListTop').then(d=>{
                        this.rows=d.rows
                })
                this.$http.post('getBusinessHeadCountInfo',{
                        year:2019
                }).then(d=>{
                        var a=[];
                        var b=[];
                        var c=[]
                        d.list.forEach(item=>{
                                a.push(item.month+'月');
                                b.push(item.finish);
                                c.push(item.receive)
                        })
                        this.data={
                                 a:{
                                        title:'月份',
                                        list:a
                                },
                                b:{
                                        title:'办结数',
                                        list:b
                                },
                                c:{
                                        title:'收件数',
                                        list:c
                                }
                        }
                        this.totalFinish=d.totalFinish;
                        this.totalReceive=d.totalReceive
                })
        }
}
</script>


