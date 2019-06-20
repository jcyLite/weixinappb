<template>
        <div class="manualQA">
                <tk-header>人工问答</tk-header>
                <div class="container">
                        <tk-cell-one>
                                人工服务电话：{{txt}}
                        </tk-cell-one>
                        <tk-button style="margin-top:10px;" @click="phone">拨打电话</tk-button>
                </div>
        </div>
</template>

<script>
export default {
        data(){
                return {
                        txt:''
                }
        },
        methods:{
                phone(){
                        location.href="tel:"+this.txt;
                }
        },
        created(){
                this.$http.post('/manualQA').then(d=>{
                        this.txt=d.phoneNumber
                })
        }
}
</script>

<style lang="less">
        .manualQA{
                svg{
                        display: none;
                }
        }
</style>
