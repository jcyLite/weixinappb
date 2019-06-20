<template>
        <div class="center">
                <tk-header>中心管理</tk-header>
                <div class="container">
                        <tk-scroll>
                                <div class="userInfo">
                                        <img src="../image/user.png" alt="">
                                        <div class="userInfo-box">
                                                <div class="name">
                                                        {{name}}
                                                        
                                                </div>
                                                <div class="deptName">
                                                        部门：{{deptName}}
                                                </div>
                                        </div>
                                        
                                       
                                </div>
                                <tk-cell-one @click="$router.push({
                                        path:item.to
                                })" :type="active?'menu':''" v-for="item of list">
                                        {{item.title}}
                                </tk-cell-one>
                                <tk-button style="margin-top:20px;" @click="clear">注销</tk-button>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        name:'',
                        deptName:'',
                        active:false,
                        list:[{
                                title:'打卡记录',
                                to:'/punchRecord'
                        },{
                                title:'今日可购',
                                to:'/foodDisplayList'
                        },{
                                title:'快递收件',
                                to:'saveExpressDelivery'
                        },{
                                title:'本周菜谱',
                                to:'weekFood'
                        },
                        {
                                title:'我的考勤',
                                to:'myWorkRigest'
                        }
                        ,
                        // {
                        //         title:'我的考勤月报',
                        //         to:'myAttendance'
                        // },
                        {
                                title:'请假申请',
                                to:'leave'
                        },{
                                title:'我的申请',
                                to:'myApply'
                        },
                        {
                                title:'意见建议',
                                to:'queryFeedback'
                        },
                        {
                                title:'好人好事',
                                to:'haorenhaoshi'
                        }
                        ]
                }
        },
        methods:{
                clear(){
                        localStorage.clear();
                        this.$router.push({
                                path:'/login'
                        })
                }
        },
        mounted(){
                var local=localStorage.getItem('userInfo');
                if(local){
                        this.name=JSON.parse(local).name;
                        this.deptName=JSON.parse(local).department.deptName;
                }
                if(!local){
                        this.$router.push({
                                path:'/login'
                        })
                }
        }
}
</script>

<style lang="less">
        .userInfo{
                overflow: hidden;
                width:100vw;
                background:#fff;
                padding-top:13px;
                margin-bottom:13px;
                border-bottom:1px solid #ddd;
                padding-bottom:18px;
                img{
                        margin-left:20px;
                        width:50px;
                        float:left;
                        display: block;
                }
                .userInfo-box{
                        margin-left:30px;
                        float:left;
                        margin-top:5px;
                        font-size:18px;
                }
                .deptName{
                        font-size:13px;
                        margin-top:10px;
                }
        }
</style>
