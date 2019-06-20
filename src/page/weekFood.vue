<template>
        <div class="weekFood">
                <tk-header>本周菜谱</tk-header>
                        <pot-scroll-nav
                                :side="true"
                                :data="rowsCpt"
                                :current="current"
                                ref="scroll"
                        >       
                                <pot-scroll-nav-panel
                                        v-for="item of rowsCpt"
                                        :key=item.date
                                        :label="item.date"
                                        :title="'星期'+week[item.date]"
                                >       
                                        <tk-title>早餐</tk-title>
                                        <div class="caiming" v-for="i of item.data['0']">{{i.name}}</div>
                                        <tk-title>中餐</tk-title> 
                                        <div class="caiming" v-for="i of item.data['1']">{{i.name}}</div>
                                </pot-scroll-nav-panel>

                        </pot-scroll-nav>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        rows:[],
                        searchVal:'',
                        week:{
                                '1':'一',
                                '2':'二',
                                '3':'三',
                                '4':'四',
                                '5':'五'
                        },
                        rowsCpt:[{
                                date:1,
                                data:[]
                        },{
                                date:2,
                                data:[]
                        },{
                                date:3,
                                data:[]
                        },{
                                date:4,
                                data:[]
                        },{
                                date:5,
                                data:[]
                        }]
                }
        },
        computed:{
                current(){
                        return this.rowsCpt[0].date
                }
        },
        created(){
                this.$http.post('weekFood').then(d=>{
                        this.rows=d.rows;
                        var arr=[{
                                date:1,
                                data:{
                                        "0":[],
                                        "1":[],
                                        "2":[]
                                }
                        },{
                                date:2,
                                data:{
                                        "0":[],
                                        "1":[],
                                        "2":[]
                                }
                        },{
                                date:3,
                                data:{
                                        "0":[],
                                        "1":[],
                                        "2":[]
                                }
                        },{
                                date:4,
                                data:{
                                        "0":[],
                                        "1":[],
                                        "2":[]
                                }
                        },{
                                date:5,
                                data:{
                                        "0":[],
                                        "1":[],
                                        "2":[]
                                }
                        }];
                        this.rows.forEach(item=>{
                                var a=new Date(item.date);
                                var b=a.getDay()
                                arr.filter(i=>{
                                        if(i.date==b){
                                               i.data[item.type].push(item);
                                        }
                                })
                        })
                        this.rowsCpt=arr;
                       
                })
        },
        updated(){
                 this.$refs.scroll.refresh()
        }

}
</script>

<style lang="less">
.weekFood{
        background: rgb(240, 240, 240);
        .pot-scroll-wrapper{
                height:calc(100vh);
        }
        .pot-scroll-nav-panel{
                background:#fff;
                overflow: hidden;
        }
        .tk-title{
                padding-top:20px;
                margin-top:20px;
        }
        .caiming{
                background:rgb(99, 93, 93);
                color:#fff;
                float:left;
                padding:5px;
                margin:4px;
                border-radius:3px;
                padding-left:8px;
                padding-right:8px;

        }
}
        

</style>
