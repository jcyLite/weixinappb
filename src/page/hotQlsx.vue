<template>
        <div class="hotQlsx">
                <tk-header>热点服务</tk-header>
                <div class="container">
                        <tk-scroll>
                                <tk-cell-one @click="openURL(item.url)" :key=index v-for="(item,index) of $store.state.hotQlsxData">
                                        {{item.name}}
                                </tk-cell-one>
                        </tk-scroll>
                </div>
        </div>        
</template>
<script>
export default {
        data(){
                return {
                        rows:[]
                }
        },
        created(){
                this.$http.post('hotQlsx').then(d=>{
                        this.$store.state.hotQlsxData=d.rows;
                })
        },
        methods:{
                openURL(url){
                        location.href=url;
                }
        }
}
</script>
<style>

</style>


