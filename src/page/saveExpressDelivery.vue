<template>
        <div class="saveExpressDelivery">
                <tk-header>快递邮寄下单</tk-header>
                <div class="container">
                        <tk-form :list=list></tk-form>
                        <tk-button @click="submit">提交</tk-button>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        list:[{
                                type:'input',
                                model:'',
                                name:'地址<font color="#e8864c">*</font>'
                        },{
                                type:'input',
                                model:'',
                                name:'描述'
                        },{
                                type:'input',
                                input:'number',
                                model:'',
                                name:'联系电话<font color="#e8864c">*</font>'
                        },{
                                type:'input',
                                model:'',
                                name:'寄件人姓名<font color="#e8864c">*</font>'
                        },{
                                type:'select',
                                model:'',
                                name:'寄件类型<font color="#e8864c">*</font>',
                                code:[0],
                                select:['文件','数码产品','日用品','服饰','食品','其他']
                        }]
                }
        },
        methods:{
                submit(){
                        this.$http.post('/saveExpressDelivery',{
                                posDesc:this.list[0].model,
                                description:this.list[1].model,
                                phoneNumber:this.list[2].model,
                                name:this.list[3].model,
                                type:this.list[4].code[0]
                        })
                }
        }
}
</script>

<style>

</style>
