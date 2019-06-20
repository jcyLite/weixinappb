<template>
        <div class="login">
                <tk-header>登陆</tk-header>
                <bg1></bg1>
                <div class="container login-container">
                        <tk-login @submit="a">

                        </tk-login>
                </div>
        </div>
</template>

<script>
export default {
        components:{
                bg1:()=>import('../../public/webgl-bg/bg1.vue')
        },
        mounted(){
                console.log(this.$router)
        },
        methods:{
                a(a,b){
                        this.$http.post('/checkWeChatUserLogin',{
                                userId:a,
                                userPwd:b
                        }).then(d=>{
                                if(d.code==0){
                                        this.$router.push({
                                                path:'/center'
                                        })
                                        
                                        localStorage.setItem('userInfo',JSON.stringify(d.user));
                                }
                        })
                        console.log(arguments)
                }
        }
}
</script>

<style lang="less">
        .login{
                height:100vh;
                .login-container{
                        z-index:1;
                        position:fixed;
                }
        }
</style>
