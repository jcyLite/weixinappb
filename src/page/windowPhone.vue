<template>
        <div class="windowPhone">
                <tk-header>便民电话</tk-header>
                <div class="container">
                        <tk-search v-model="searchVal"></tk-search>
                        <tk-scroll>
                                
                                <tk-cell @click="phone(item.phone)" :filter="searchVal" :key=index 
                                :title="['区域','名称','电话','备注']"
                                :data="[
                                        item.stationName,
                                        item.name,
                                        item.phone,
                                        (item.remark||'无')
                                ]" v-for="(item,index) of rows"></tk-cell>
                        </tk-scroll>
                </div>
                
        </div>
</template>

<script>
export default {
        data(){
                return {
                        rows:[],
                        searchVal:''
                }
        },
        created(){
                this.$http.post('windowPhone').then(d=>{
                        this.rows=d.rows;
                })
        },
        methods:{
                phone(phone){
                        location.href="tel:"+phone;
                }
        }
}
</script>

<style lang="less">
        .windowPhone{
                .tk-scroll{
                        height:calc(100vh - 50px);
                }
        }
</style>
