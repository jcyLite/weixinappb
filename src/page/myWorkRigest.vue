<template>
        <div v-cloak class="myWorkRigest">
                <tk-header>我的月度考勤记录</tk-header>
                <div class="container">
                        <tk-form :list=list></tk-form>
                        <!-- <tk-search v-model="searchVal"></tk-search> -->
                        <tk-scroll>
                                <tk-detail :list="detail">

                                </tk-detail>
                                <tk-button @click="$router.push({
                                        path:'myWorkRigestd',
                                        query:{
                                                date:list[0].model
                                        }
                                })">查看详情</tk-button>
                                <!-- <tk-cell-row :data='[
                                        "打卡日期",
                                        "考勤状态",
                                ].concat(makeDatab(type))'>

                                </tk-cell-row>
                                <tk-cell-row
                                :filter="searchVal"
                                        @click="$router.push({
                                                path:'myWorkRigestDetail',
                                                query:{
                                                        data:item,
                                                        type:item.status.split('|')[3]!='正常'
                                                }
                                        })"
                                        v-for="item of rows"
                                :data='[
                                        item.checktime.substring(0,10),
                                        item.status.split("|")[3],
                                ].concat(makeData(item,type))'
                                
                                ></tk-cell-row> -->
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        created(){
                this.submit();
        },
         methods:{
                submit(){
                        this.$http.post('myAttendance',{
                                queryDate:this.list[0].model
                        }).then(d=>{
                                this.detail=[{
                                        key:'姓名',
                                        value:d.list.ename
                                },{
                                        key:'员工编号',
                                        value:d.list.pin
                                },{
                                        key:'出勤天数',
                                        value:d.list.attendance
                                },{
                                        key:'旷工天数',
                                        value:d.list.completion
                                },{
                                        key:'迟到次数',
                                        value:d.list.beLate
                                },{
                                        key:'早退次数',
                                        value:d.list.leaveEarly
                                },{
                                        key:'请假时长',
                                        value:d.list.leave
                                },{
                                         key:'补卡次数',
                                       value:d.list.replenishCard
                                }]
                        })
                }
        },
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
                var a=time.getFullYear()+'-'+c;
                var b=this.$route.query.date;
                return {
                        searchVal:'',
                        type:0,
                        detail:[],
                        rows:[],
                        list:[{
                                type:'selectMouth',
                                name:'查询月份',
                                model:b||a,
                                success:()=>{
                                        console.log(this.$router)
                                //       this.$router.push({
                                //               path:'myWorkRigest',
                                //               query:{
                                //                       date:this.list[0].model
                                //               }
                                //       })
                                      this.submit()  
                                }
                        }]
                }
        },
}
</script>

<style lang="less">

</style>
