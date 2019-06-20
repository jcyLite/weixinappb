<style lang="less">
        .reserveList{
                .tk-scroll{
                        height:calc(100vh - 100px);
                }
        }
</style>
<template>
        <div class="reserveList">
                <tk-header>预约列表</tk-header>
                <div class="container">
                        <tk-tab-container :active=selectedLabel v-model="tablist">
                                <div slot="0">
                                        <tk-search v-model="searchVal"></tk-search>
                                        <tk-button @click="active=!active">{{active?'展示全部属性':'只展示业务名称'}}</tk-button>
                                        <tk-scroll>
                                                <tk-cell-one 
                                                @click="$router.push({
                                                        path:'/reserveInfo',
                                                        query:{
                                                                data:item
                                                        }
                                                })"
                                                v-if="active" :filter=searchVal v-for="item of rows" :data="item.queueName"></tk-cell-one>     
                                                <tk-cell 
                                                        :filter=searchVal
                                                        v-if="!active"
                                                        v-for="item of rows"
                                                :title="['部门','可预约日期','可预约时间段','可预约区域','剩余预约数量','已预约数量','业务名称']"
                                                :data="[
                                                        item.department,
                                                        item.orderDate.substring(0,10),
                                                        item.period,
                                                        item.posDesc,
                                                        item.unorderedNum,
                                                        item.orderedNum,
                                                        item.queueName
                                                ]"
                                                @click="$router.push({
                                                        path:'/reserveInfo',
                                                        query:{
                                                                data:item
                                                        }
                                                })"
                                                ></tk-cell>
                                        </tk-scroll>
                                </div>
                                <div slot="1">
                                        <tk-form :list="list"></tk-form>   
                                        <tk-button @click="submit">查询</tk-button> 
                                        <tk-scroll>
                                                <tk-cell 
                                                        v-if="!active"
                                                        v-for="item of numList"
                                                 :title="['部门','窗口','预约日期','预约人姓名','手机号码','身份证号码','预约时间段','预约业务名称','预约状态']"
                                                :data="[
                                                        item.deptName,
                                                        item.window,
                                                        item.orderDate.substring(0,10),
                                                        item.name,
                                                        item.phone,
                                                        item.personID,
                                                        item.period,
                                                        item.queueName,
                                                        ['预约中','预约成功','预约失败'][item.status]
                                                ]"
                                                @click="$router.push({
                                                        path:'/reserveInfo',
                                                        query:{
                                                                data:item
                                                        }
                                                })"
                                                
                                                ></tk-cell>
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
                        list:[{
                                model:'',
                                type:'input',
                                name:'请输入你的手机号'
                        }],
                        active:false,
                        rows:[],
                        numList:[],
                        searchVal:'',
                        selectedLabel:0,
                        tablist:[
                                {
                                        label:'可预约列表',
                                        list:[]
                                },
                                {
                                        label:'我的预约',
                                        list:[]
                                }
                        ]
                }
        },
        created(){
                this.$http.post('reserveAbleInfo').then(d=>{
                        this.rows=d.rows
                })
        },
        methods:{
                submit(){
                        this.$http.post('numInfo',{
                                phone:this.list[0].model
                        }).then(d=>{
                                this.numList=d.list;
                        })
                }
        }
}
</script>


