<style lang="less">
        .myAttendance{
                .tk-scroll{
                        height:calc(100vh - 50px);
                }
        }
</style>
<template>
        <div class="myAttendance">
                <tk-header>打卡记录查询</tk-header>
                <div class="container">
                        <tk-form :list=list></tk-form>
                        <tk-scroll>
                                <tk-cell 
                                        v-for="item of rows"
                                :title="['姓名','员工编号','出勤天数','旷工天数','迟到次数','早退次数',]"
                                :data='[
                                        item.ename,
                                        item.pin,
                                        item.attendance,
                                        item.completion,
                                        item.beLate,
                                        item.leaveEarly,
                                        item.leave
                                ]'
                                
                                ></tk-cell>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                var time=new Date();
                var c=time.getMonth()+1;
                if(c<10){
                        c='0'+c;
                }
                var d=time.getDate();
                if(d<10){
                        d="0"+d;
                }
                var a=time.getFullYear()+'-'+c
                return {
                        rows:[],
                        list:[{
                                type:'selectMouth',
                                name:'查询月份',
                                model:a,
                                success:()=>{
                                        console.log(this)
                                      this.submit()  
                                }
                        }]
                }
        },
        methods:{
                submit(){
                        this.$http.post('myAttendance',{
                                queryDate:this.list[0].model
                        }).then(d=>{
                                this.rows=d.list;
                        })
                }
        },
        created(){
                this.submit();
        }
}
</script>


