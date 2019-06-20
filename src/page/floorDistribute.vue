<template>
        <div class="floorDistribute">
                <tk-header>楼层分布图</tk-header>
                <div  class="container">
                        <tk-scroll>
                                <tk-title>信息</tk-title>
                                <div class="text">
                                        <span class="title">南一楼</span>
                                        
                                        <br>
                                        A区(人社专区) B区(不动产专区)
                                         <br>
                                        <span class="title">东一楼</span>
                                        
                                        <br>
                                        E区(公安局出入境大厅)
                                        无障碍卫生间,母婴室,无障碍电梯
                                         <br>
                                        <span class="title">南二楼</span>
                                        
                                        <br>
                                        C1区(公积金专区) 
                                        <br>
                                        C2区(税务专区)
                                        <br>
                                        D1区(综合区)林业 烟草 房管 环保 城管 水务 人防 港航 交通 公交 自来水 供电 燃气 移动 电信 中石油 中石化 文广 卫计 科技 民政
                                        <br>
                                        D2区(综合区)市场监督管理局 印章雕刻 安监 消防 建设 规划 国土 发改 非常驻部门受理 景源景归人才服务 投资项目咨询代办
                                         <br>
                                        <span class="title">南三楼</span>
                                        
                                        市公共资源交易中心
                                </div>
                                <tk-title>图</tk-title>
                        <tk-image-cell :data="data"></tk-image-cell>
                        点击图片可放大显示
                        </tk-scroll>
                        
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        data:{
                                img_src:require('../image/floorDistribute.jpg')
                        }
                }
        },
        created(){
        }
}
</script>

<style lang="less">
        .floorDistribute{
                .container{
                        width:100%;
                        overflow: scroll;
                        .tk-image-cell-box{
                                background-size:cover;
                                height:300px;
                                width:calc(100vw - 40px);
                        }
                }
                .text{
                        line-height:20px;
                        font-size:16px;
                        .title{
                                font-size:18px;
                                font-weight: 600;
                        }
                }
        }
</style>
