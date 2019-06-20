<style lang="less">
        .punchRecord{
                .tk-scroll{
                        height:calc(100vh - 50px);
                }
        }
</style>
<template>
        <div class="punchRecord">
                <tk-header>打卡记录查询</tk-header>
                <div class="container">
                        <tk-form :list=list></tk-form>
                        <tk-search v-model="searchVal"></tk-search>
                        <tk-scroll>
                                <tk-cell-row 
                                        :data='[
                                                "部门名称",
                                                "打卡方式",
                                                "打卡日期",
                                                "打卡时间"
                                        ]'
                                ></tk-cell-row>
                                <tk-cell-row 
                                        :filter="searchVal"
                                        v-for="item of rows"
                                        :data='[
                                                item.deptname,
                                                {
                                                        1:"指纹",
                                                        15:"人脸"
                                                }[item.verify],
                                                item.checktime.split(" ")[0],
                                                item.checktime.split(" ")[1]
                                ]'
                                
                                ></tk-cell-row>
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
                        searchVal:'',
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
                        this.$http.post('punchRecord',{
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


