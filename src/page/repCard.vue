<template>
        <div class="repCard">
                <tk-header>补卡申请</tk-header>
                <tk-scroll>
                        <tk-form :list=list></tk-form>
                        <tk-button @click='submit'>提交</tk-button>
                </tk-scroll>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        list:[{
                                type:'input',
                                model:'',
                                name:'申请人姓名'
                        },{
                                type:'input',
                                model:'',
                                name:'申请人编号'
                        },{
                                type:'input',
                                model:'',
                                name:'审批人编号'
                        },{
                                type:'input',
                                model:'',
                                name:'审批人姓名'
                        },{
                                type:'selectData',
                                model:'',
                                name:'补卡日期'
                        },{
                                type:'select',
                                model:'',
                                code:[0],
                                select:['早上','中午','晚上'],
                                name:'结束时间'
                        },{
                                type:'input',
                                model:'',
                                name:'补卡说明'
                        }]
                }
        },
        methods:{
                submit(){
                        console.log(this.list[5].code)
                        this.$http.post('repCard',{
                                pin:this.list[1].model,
                                name:this.list[0].model,
                                approvePin:this.list[2].model,
                                approveName:this.list[3].model,
                                repDate:this.list[4].model,
                                repTime:this.list[5].code[0],
                                reason:this.list[6].model
                        }).then(d=>{
                                
                        })
                }
        }
}
</script>

<style>

</style>
