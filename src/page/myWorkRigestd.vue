<template>
        <div class="myWorkRigestd">
                <tk-header>我的月度考勤记录</tk-header>
                <div class="container">
                        <tk-search v-model="searchVal"></tk-search>
                        <tk-scroll>
                                <tk-cell-row :data='[
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
                                                        typed:type,
                                                        type:item.status.split('|')[3]!='正常'
                                                }
                                        })"
                                        v-for="item of rows"
                                :data='[
                                        item.checktime.substring(5,10),
                                        item.status.split("|")[3],
                                ].concat(makeData(item,type))'
                                
                                ></tk-cell-row>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        searchVal:'',
                        rows:[],
                        type:0
                }
        },
        methods:{
                 makeDatab(type){
                         return type==1?["早上","中午","晚上"]:["最早","最晚"]
                 },
                 makeData(item,type){
                        return type==1?[(item.morningtime?item.morningtime.split(' ')[1]:'无'),
                        (item.noontime?item.noontime.split(' ')[1]:'无'),
                        (item.nighttime?item.nighttime.split(' ')[1]:'无')]:
                        [ (item.firsttime?item.firsttime.split(' ')[1]:'无'),
                        (item.lasttime?item.lasttime.split(' ')[1]:'无')]
                 }
        },
        created(){
                this.$http.post('myWorkRigest',{
                        queryDate:this.$route.query.date
                }).then(d=>{
                        this.rows=d.list;
                        this.type=d.type
                })
        }
}
</script>

<style>

</style>
