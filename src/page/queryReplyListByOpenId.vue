<template>
        <div class="queryReplyListByOpenId">
                <tk-header>信件答复列表</tk-header>
                <div class="container">

                </div>
        </div>
</template>

<script>
export default {
        created(){
                this.$http.post('/queryReplyListByOpenId',{
                        id:'admin'
                }).then(d=>{
                        
                })
        }
}
</script>

<style>

</style>
