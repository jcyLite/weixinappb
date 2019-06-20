<template>
        <div class="reserveInfo">
                <tk-header>预约选项信息</tk-header>
                <div class="container">
                        <tk-detail :list="listb"></tk-detail>
                        <tk-form :list=list></tk-form>
                        <tk-button @click="submit" style="margin-top:100px;">提交</tk-button>
                </div>
        </div>
</template>
<script>
export default {
        data(){
                var that=this;
                return {
                        code:[],
                        timeCode:[],
                        queueIDs:[],
                        timeCodeAct:0,
                        codeAct:0,
                        queueIDsAct:0,
                        listb:[{
                                key:'部门：',
                                value:this.$route.query.data.department
                        },{
                                key:'可预约日期',
                                value:this.$route.query.data.orderDate.substring(0,10)
                        },{
                                key:'可预约时间段',
                                value:this.$route.query.data.period
                        },{
                                key:'可预约区域：',
                                value:this.$route.query.data.posDesc
                        },{
                                key:'剩余预约数量：',
                                value:this.$route.query.data.unorderedNum
                        },{
                                key:'已预约数量：',
                                value:this.$route.query.data.orderedNum
                        },{
                                key:'业务名称：',
                                value:this.$route.query.data.queueName
                        }],
                        list:[{
                                name:'姓名',
                                type:'input',
                                format:/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
                                model:''
                        },{
                                name:'手机号',
                                type:'input',
                                format:/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/,
                                model:''
                        },{
                                name:'身份证号',
                                type:'input',
                                format:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                                 model:''
                        }]
                }
        },
        methods:{
                submit(){
                        for(var i=0;i<3;i++){
                                if(!this.list[i].format.test(this.list[i].model)){
                                        this.$createPotToast({
                                                txt: '数据格式出错',
                                                type: 'txt'
                                         }).show()
                                        return;
                                }
                        }
                        this.$http.post('saveReserve',{
                                name:this.list[0].model,
                                phone:this.list[1].model,
                                personID:this.list[2].model,
                                id:this.$route.query.data.id
                        }).then(d=>{
                                
                        })
                }
        },
        created(){
                
        }
}
</script>
<style>

</style>


