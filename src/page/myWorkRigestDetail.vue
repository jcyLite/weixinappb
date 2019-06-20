<template>
        <div class="myWorkRigestDetail">
                <tk-header>补卡申请</tk-header>
                <div class="container">
                        <tk-detail :list=list></tk-detail>
                        <tk-form v-if="$route.query.type" :list="listb"></tk-form>
                        <tk-button v-if="$route.query.type" @click="apply">申请补卡</tk-button>
                </div>
        </div>
</template>

<script>
export default {
        created(){
                this.$http.get('getApprove').then(d=>{
                        d.list.forEach(item=>{
                                this.listb[2].select.push(item.name)
                                this.ids.push(item.id)
                        })
                })
        },
        methods:{
                apply(){
                        if(!this.ids[this.listb[2].code[0]]||!this.listb[0].hasSelect.length||!this.listb[1].model){
                                return this.$createPotDialog({
                                        type:'alert',
                                        title:'提示',
                                        content:'你提交的数据有空',
                                        icon:'potic-alert'
                                }).show()
                        }
                        this.$http.post('repCard',{
                                approveId:this.ids[this.listb[2].code[0]],
                                repDate:this.$route.query.data.checktime.substring(0,10),
                                repTime:this.listb[0].hasSelect.join(','),
                                reason:this.listb[1].model
                        }).then(d=>{
                                if(d.code==0){
                                        this.$router.go(-1)
                                }
                        })
                }
        },
        data(){
                return {
                        ids:[],
                        listb:[{
                                type:'selects',
                                code:[0],
                                name:'补卡时段',
                                model:'',
                                hasSelect:[],
                                selects:this.$route.query.typed=='1'?['早上','中午','晚上']:this.$route.query.typed=='2'?['首次打卡时间','结束打卡时间']:[]
                        },{
                               type:'input',
                               name:'补卡说明',
                               model:''
                        },{
                                type:'select',
                                code:[0],
                                name:'选择审批人',
                                model:'',
                                select:[]
                        }],
                        list:[
                                {
                                        key:'姓名',
                                        value:this.$route.query.data.ename
                                },
                                {
                                        key:'员工编号',
                                        value:this.$route.query.data.pin
                                },
                                {
                                        key:'部门编号',
                                        value:this.$route.query.data.deptnumber
                                },
                                {
                                        key:'部门名称',
                                        value:this.$route.query.data.deptname
                                },
                                {
                                        key:'打卡时间',
                                        value:this.$route.query.data.checktime.substring(0,10)
                                },
                                {
                                        key:'考勤状态',
                                        value:this.$route.query.data.status.split("|")[3]
                                }
                        ]
                }
        }

}
</script>

<style lang="less">

</style>
