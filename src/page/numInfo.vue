<template>
        <div class="numInfo">
                <tk-header>我的预约</tk-header>
                <div class="container">
                        <tk-form :list="list"></tk-form>   
                        <tk-button @click="submit">查询</tk-button>            
                </div>
        </div>
</template>
<script>
export default {
        data(){
                return {
                        list:[{
                                model:'',
                                type:'input',
                                name:'请输入你的手机号'
                        }]
                }
        },
        methods:{
                submit(){
                        this.$http.post('numInfo',{
                                phone:this.list[0].model
                        }).then(d=>{
                                
                        })
                }
        }
}
</script>
<style>

</style>

