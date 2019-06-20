<template>
        <div class="saveConsulteComplaint">
                <tk-header>在线咨询与投诉</tk-header>
                <div class="saveConsulteComplaint">
                        <tk-form :list=list></tk-form>
                        <tk-button @click="submit">提交</tk-button>
                        <tk-button style="margin-top:10px;margin-bottom:10px;" @click="chakan">查看</tk-button>
                        <tk-button @click="phone">拨打人工服务电话{{txt}}</tk-button>
                        <tk-scroll>
                                <tk-cell-four :data="{
                                        title:'问题类别:'+['咨询','投诉'][item.type],
                                        status:['未答复','已答复'][item.status],
                                        content:item.question,
                                        time:''
                                }" v-for="item of rows"></tk-cell-four>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        rows:[],
                        txt:'07988337929',
                        list:[{
                                name:'问题类别',
                                type:'select',
                                model:'',
                                code:'',
                                select:['咨询','投诉']
                        },{
                                name:'问题',
                                model:'',
                                type:'textarea'
                        },{
                                name:'联系电话',
                                model:'',
                                type:'input'
                        }]
                }
        },
        methods:{
                submit(){
                        this.$http.post('/saveConsulteComplaint',{
                                type:this.list[0].code[0],
                                question:this.list[1].model,
                                phone:this.list[2].model
                        }).then(d=>{

                        })
                },
                phone(){
                        location.href="tel:"+this.txt;
                },
                chakan(){
                        this.$http.post('/queryPersonalReplyList',{
                                phone:this.list[2].model
                        }).then(d=>{
                                this.rows=d.rows;
                        })
                }
        }
}
</script>

<style lang="less">
.saveConsulteComplaint{
        .tk-scroll{
                height:calc(100vh - 250px);
        }
}
</style>
