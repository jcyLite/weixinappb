<template>
        <div class="queryQuestionList">
                <tk-header>智能问答与常见问题</tk-header>
                <div class="container">
                        <tk-search v-model="searchVal"></tk-search>
                        <!-- <tk-button @click="qiehuan">点击切换样式</tk-button> -->
                        <tk-scroll>
                                <tk-cell-one v-if="!active" :spread="'答案：'+item.answer" :filter="searchVal" :data="item.question" v-for="item of rows">

                                </tk-cell-one>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        active:false,
                        searchVal:'',
                        rows:[],
                        list:[{
                                type:'input',
                                name:'请输入您的问题',
                                model:''
                        }]
                }
        },
        methods:{
                qiehuan(){
                        this.active=!this.active;   
                }
        },
        created(){
                this.$http.post('queryQuestionList').then(d=>{
                        this.rows=d.rows;
                })
        }
}
</script>

<style lang="less">
        .queryQuestionList{
                .tk-scroll{
                        height:calc(100vh - 50px);
                }
        }
</style>
