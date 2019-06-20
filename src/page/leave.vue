<template>
        <div class="leave">
                <tk-header>请假</tk-header>
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
                        ids:[],
                        list:[{
                                type:'selectTime',
                                model:'',
                                name:'请假开始日期<font color="#e8864c">*</font>'
                        },{
                                type:'selectTime',
                                model:'',
                                name:'请假结束日期<font color="#e8864c">*</font>'
                        },{
                                type:'select',
                                model:'',
                                code:[],
                                name:'请假类型<font color="#e8864c">*</font>',
                                select:['公假','私假','病假','外出']
                        },{
                                type:'input',
                                model:'',
                                name:'替岗人员'
                        },{
                                type:'input',
                                model:'',
                                name:'请假原因<font color="#e8864c">*</font>'
                        },{
                                type:'select',
                                model:'',
                                select:[],
                                code:[],
                                name:'审批人<font color="#e8864c">*</font>'
                        }]
                }
        },
        methods:{
                submit(){
                        if(!this.list[0].model||!this.list[1].model||!(this.list[2].code.length)||!this.ids[this.list[5].code[0]]){
                                return this.$createPotDialog({
                                        type:'alert',
                                        title:'提示',
                                        content:'你提交的数据有空',
                                        icon:'potic-alert'
                                }).show()
                        }
                        if(this.list[0].model>this.list[1].model){
                                return this.$createPotDialog({
                                        type:'alert',
                                        title:'提示',
                                        content:'结束时间不能早于开始时间',
                                        icon:'potic-alert'
                                }).show()
                        }
                        this.$http.post('leave',{
                                startDate:this.list[0].model,
                                endDate:this.list[1].model,
                                type:this.list[2].code[0],
                                replacer:this.list[3].model,
                                reason:this.list[4].model,
                                approveId:this.ids[this.list[5].code[0]]
                        }).then(d=>{
                                this.$router.go(-1);
                        })
                }
        },
        created(){
                var id=localStorage.getItem('uid');
                 this.$http.get('getApprove').then(d=>{
                        d.list.forEach(item=>{
                                if(item.id!=id){
                                        this.list[5].select.push(item.name)
                                        this.ids.push(item.id)
                                }
                                
                        })
                })
        }
}
</script>

<style>

</style>
