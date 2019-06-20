<template>
        <div class="foodDisplayList">
                <tk-header>今日可购食品</tk-header>
                <div class="container">
                        <tk-search v-model="searchVal"></tk-search>
                        <!-- <tk-table 
                                :theader="theader"
                                :tbody="tbody"
                        ></tk-table> -->
                        <tk-cell-row :data="['食品名称','数量','价格','描述']"></tk-cell-row>
                        <tk-scroll>
                                <tk-cell-row :filter="searchVal" :data="[
                                        item.name,
                                        item.num,
                                        item.price,
                                        item.description
                                ]" v-for="item of rows"></tk-cell-row>
                        </tk-scroll>
                        
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        searchVal:'',
                        rows:[]
                }
        },
        computed:{
                theader(){
                        return ['食品日期','食品名称','食品数量','价格','描述']
                },
                tbody(){
                        var arr=[];
                        this.rows.forEach(item=>{
                                arr.push([
                                        item.publishDate.substring(0,10),
                                        item.name,
                                        item.num,
                                        item.price,
                                        item.description
                                ])
                        })
                        return arr
                }
        },
        created(){
                var id=localStorage.getItem('uid')
                this.$http.post('/foodDisplayList',{
                        sysUserId:id
                }).then(d=>{
                        this.rows=d.rows
                })
        }
}
</script>

<style lang="less">
.foodDisplayList{
        .tk-scroll{
                height:calc(100vh - 50px);
        }
}

</style>
