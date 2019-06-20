<template>
        <div class="queryPersonalReplyList">
                <tk-header>
                        信件答复
                </tk-header>
                <div class="container">
                        <tk-form :list="list"></tk-form>
                        <tk-button @click="submit">查询</tk-button>
                        <tk-scroll>

                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        list:[{
                                name:'电话',
                                model:'',
                                type:'input'
                        }]
                }
        },
        methods:{
                submit(){
                        this.$http.post('queryPersonalReplyList',{
                                phone:this.list[0].model
                        })
                }
        }
}
</script>

<style>

</style>
