<template>
        <div class="leaveApprove">
                <tk-header>请假结果查询</tk-header>
                        <!-- <tk-form :list=list></tk-form> -->
                        <!-- <tk-button @click='submit'>提交</tk-button> -->
                <div class="container">
                         <tk-tab-container :active=selectedLabel v-model="tablist">
                                <div slot="0">
                                        <tk-scroll>
                                                <tk-cell 
                                                :title="['姓名','员工编号','原因','部门名称','开始时间',
                                                        '结束时间','请假类型','审批人','审批状态']"
                                                :data="[
                                                        item.name,
                                                        item.pin,
                                                        item.reason,
                                                        item.dept,
                                                        (item.startTime||'无'),
                                                        (item.endTime||'无'),
                                                        item.leaveType,
                                                        item.approveName,
                                                        [`<font color='#e8864c'>待审核</font>`,`<font color='green'>审核通过</font>`,`<font color='red'>驳回</font>`][item.status]
                                                ]" v-for="item of rows"></tk-cell>
                                        </tk-scroll>
                                </div>
                                <div slot="1">
                                        <tk-scroll>
                                                <tk-cell 
                                                :title="['姓名','员工编号','原因','部门名称','补卡日期','审批人','补卡时段','审批状态']"
                                                :data="[
                                                        item.name,
                                                        item.pin,
                                                        item.reason,
                                                        item.dept,
                                                        (item.repDate||'无'),
                                                        item.approveName,
                                                        makeData(item),
                                                        [`<font color='#e8864c'>待审核</font>`,`<font color='green'>审核通过</font>`,`<font color='red'>驳回</font>`][item.status]
                                                ]"  v-for="item of rowsb"></tk-cell>
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
                        tablist:[
                                {
                                        label:'请假申请',
                                        list:[]
                                },
                                {
                                        label:'补卡申请',
                                        list:[]
                                }
                        ],
                        selectedLabel:0,
                        rows:[],
                        rowsb:[],
                        list:[{
                                type:'input',
                                model:'',
                                name:'申请人姓名'
                        },{
                                type:'input',
                                model:'',
                                name:'申请人编号'
                        },{
                                type:'selectData',
                                model:'',
                                name:'开始日期'
                        },{
                                type:'selectData',
                                model:'',
                                name:'结束日期'
                        }]
                }
        },
        methods:{
                makeData(item){
                       return ['早上','中午','晚上'].filter((itema,index)=>{return item.repTime.split(',').indexOf(index.toString())!=-1})
                },
                submit(){
                        if(this.list[2].model>this.list[3].model){
                                return this.$createPotDialog({
                                        type:'alert',
                                        title:'提示',
                                        content:'结束时间不能早于开始时间',
                                        icon:'potic-alert'
                                }).show()
                        }
                        this.$http.post('leaveApprove',{
                                 pin:this.list[1].model,
                                name:this.list[0].model,
                                 startDate:this.list[2].model,
                                endDate:this.list[3].model
                        }).then()
                }
        },
        created(){
                this.$http.post('myApply').then(d=>{
                        d.list.forEach(item=>{
                                if(item.type=='0'){
                                        this.rows.push(item)
                                }else{
                                        this.rowsb.push(item)
                                }
                        })
                })
        }
}
</script>

<style>

</style>
