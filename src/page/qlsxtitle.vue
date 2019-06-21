<style lang="less">
    .qlsxtitle{
        .tk-scroll{
            height:calc(100vh - 100px);
            .icon-box{
                height:40px;
                padding-top:14px;
                span{
                    font-size:30px;
                }
            }
        }
    }
</style>
<template>
    <div class="qlsxtitle">
        <tk-header>办事指南</tk-header>
        <div class="container" v-cloak>
            <tk-tab-container :active=selectedLabel v-model="$store.state.tablist">
                <div class="tablistcontainer" :key="index" v-for="(item,index) of $store.state.tablist" :slot="index">
                    <tk-search v-model="searchVal"></tk-search>
                    <!-- <tk-button style="margin-bottom:5px;" @click="active=!active">点击切换显示</tk-button> -->
                    <!-- <tk-button @click="$router.push({
                        path:'/myshoucang'
                    })">我的收藏列表</tk-button> -->
                    <tk-scroll>
                        <div @click="$router.push({
                            path:i.CODE?'/queryqlsxlistbytitle':'/queryqlsxlistbyagent',
                            query:{
                                titleid:i.CODE?i.CODE:i.AGENT_CODE
                            }
                        })" :key="indexO" v-for="(i,indexO) of item.list" v-if="item.list.length">
                            <tk-cell-one :filter="searchVal" :type='index!=2?"menu":""' :data="i.NAME?i.NAME:i.AGENT_NAME">
                                <div v-if="index!=2" class="icon-box" slot="icon">
                                    <span :style="{color:`rgb(${indexO*a},${255-indexO*b},${255-indexO*c})`}" :class="['icon-'+(index==0?'p':'q')+'-'+indexO]"></span>
                                </div>
                                <span style="margin-right:10px;" slot="icon" class="icon icon-agent" v-if="index==2"></span>
                            </tk-cell-one>
                        </div>
                    </tk-scroll>
                    <div v-if="!item.list.length">
                        <tk-nodata></tk-nodata>
                    </div> 
                </div>
            </tk-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            a:parseInt(Math.random()*10)+10,
            b:parseInt(Math.random()*20)+10,
            c:parseInt(Math.random()*20)+10,
            active:false,
            selectedLabel:0,
            searchVal:'',
            tablist:[
                {
                    label:'个人',
                    list:[]
                },
                {
                    label:'法人',
                    list:[]
                },
                {
                    label:'部门',
                    list:[]
                }
            ]
        }
    },
    created(){
        // this.$http.post('queryqlsxlistbyagent',{
        //     agnetcode:'360201000201021000'
        // }).then(d=>{
            
        // })
        console.log(12);
        this.$http.post('/agent').then(d=>{
              this.$store.state.tablist[2].list=d.rows
        })
        this.$http.post('qlsxtitle').then(d=>{
            var arr=[{
                    label: '个人',
                    list: []
                },
                {
                    label: '法人',
                    list: []
                }];

            d.rows.forEach(item=>{
                arr[item.CLASS_TYPE].list.push(item)
            })
            this.$store.state.tablist[0].list=arr[0].list;
             this.$store.state.tablist[1].list=arr[1].list;
        })
    },
    mounted(){
        
    }
}
</script>

