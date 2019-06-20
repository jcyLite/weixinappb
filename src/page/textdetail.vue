<template>
        <div class="textdetail">
                <tk-header>详情</tk-header>
                <div class="container">
                        <tk-scroll>
                                <div class="mycontent" v-html="$route.query.content"></div>
                        </tk-scroll>
                </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
        .textdetail{
                line-height:30px;
                .mycontent{
                        padding:13px;
                        background:#fff;
                        line-height:30px;
                }
        }
</style>
