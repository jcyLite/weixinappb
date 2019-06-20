<template>
        <div class="queryAdminMatterList">
                <tk-header>行政中心窗口事项列表</tk-header>
                <div class="container">
                        
                </div>
        </div>
</template>

<script>
export default {
        created(){
                this.$http.post('queryAdminMatterList').then(d=>{})
        }
}
</script>

<style lang="less">
        .queryAdminMatterList{

        }
</style>
