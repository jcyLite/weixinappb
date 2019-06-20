<template>
        <div class="queryFeedback">
                <tk-header>意见建议、好人好事</tk-header>
                <div class="container">
                      <tk-tab-container :active=active v-model="tablist">
                              <div slot="1">
                                      <!-- <tk-scroll> -->
                                        <tk-form :list=list>

                                        </tk-form>
                                        <tk-button @click="submitb">提交</tk-button>
                                      <!-- </tk-scroll> -->
                              </div>
                              <div slot="0">
                                      <tk-scroll>
                                                <tk-cell-four :data="{
                                                        title:item.title,
                                                        status:item.remark,
                                                        content:item.content,
                                                        time:''
                                                }" 
                                                :key=index
                                                @click="$router.push({
                                                        path:'textdetail',
                                                        query:{
                                                                content:item.content
                                                        }
                                                })"
                                                v-for="(item,index) of tablist[1].list">

                                                </tk-cell-four>
                                        </tk-scroll>
                              </div>
                        </tk-tab-container>  
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        active:0,
                        list:[{
                                name:'标题<font color="#e8864c">*</font>',
                                type:'input',
                                model:''
                        },{
                                name:'内容<font color="#e8864c">*</font>',
                                type:'textarea',
                                model:''
                        }], 
                        tablist:[
                                {
                                        label:'我的意见建议',
                                        list:[]
                                },
                                {
                                        label:'意见建议',
                                        list:[]
                                }
                        ]
                }
                
        },
        methods:{
                submitb(){
                        console.log(1212);
                        if(!this.list[0].model||!this.list[1].model){
                                return this.$createPotDialog({
                                        type:'alert',
                                        title:'提示',
                                        content:'你提交的数据有空',
                                        icon:'potic-alert'
                                }).show()
                        }
                        this.$http.post('/saveFeedback',{
                                title:this.list[0].model,
                                content:this.list[1].model,
                                type:1
                        }).then(d=>{
                                this.query()
                        })
                },
                query(){
                        this.$http.post('queryFeedback',{
                                type:1
                        }).then(d=>{
                                this.tablist[1].list=d.rows;
                        })
                }
        },
        created(){
                this.query()
        }

}
</script>

<style lang="less">
        .queryFeedback{
                .tk-scroll{
                        height:calc(100vh -50px);
                }
        }
</style>
