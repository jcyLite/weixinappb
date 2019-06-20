<template>
        <div class="queryQuestionInfo">
                <tk-header>常见问题详情</tk-header>
                <div class="container">
                        <tk-scroll>
                                <tk-detail :list=list>

                                </tk-detail>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        list:[{
                                key:'问题',
                                value:this.$route.query.item.question
                        },{
                                key:'答案',
                                value:this.$route.query.item.answer,
                                detail:this.$route.query.item.answer
                        }]
                }
        }
}
</script>

<style lang="less">
        .queryQuestionInfo{
                .tk-scroll{
                        height:100vh;
                }
        }
</style>
