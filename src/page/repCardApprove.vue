<template>
        <div class="repCardApprove">
                <tk-header>补卡申请记录查询</tk-header>
                <div class="container">
                        <tk-scroll>
                                <tk-form :list=list>

                                </tk-form>
                                <tk-button @click="submit">查询</tk-button>
                        </tk-scroll>
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
                                name:'员工姓名'
                        },{
                                type:'input',
                                model:'',
                                name:'员工编号'
                        },{
                                type:'selectData',
                                model:'',
                                name:'开始时间'
                        },{
                                type:'selectData',
                                model:'',
                                name:'结束时间'
                        }]
                }
        },
        methods:{
                submit(){
                        this.$http.post('repCardApprove',{
                                name:this.list[0].model,
                                pin:this.list[1].model,
                                startDate:this.list[2].model,
                                endDate:this.list[3].model
                        }).then(d=>{

                        })
                }
        },
        created(){
                // this.$http.post('repCardApprove')
        }
}
</script>

<style>

</style>
