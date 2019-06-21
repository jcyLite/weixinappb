<template>
        <div class="infoPublish">
                <tk-header>信息发布内容查询</tk-header>
                <div class="container">
                        <tk-cell
                                @click="$router.push({
                                        path:'/textdetail',
                                        query:{
                                                content:'● 主题：'+item.title+'<br/>● 信息内容：'+item.message+'<br/>● 发布时间：'+item.publishDate+'。'
                                        }
                                        
                                })"
                                :title="['主题','信息内容','发布时间']"
                                :data="[
                                        item.title,
                                        item.message,
                                        item.publishDate
                                ]"
                                v-for="item of d"></tk-cell>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        d:[]
                }
        },
        created(){
                this.$http.post('/infoPublish',{
                        status:1
                }).then(d=>{
                        this.d=d.list;
                })
        }
}
</script>

<style lang="less">

</style>
