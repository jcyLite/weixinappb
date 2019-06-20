<template>
        <div class="querySunWorkQlsx">
                <tk-header>阳光政务</tk-header>
                <div class="querySunWorkQlsx">
                        
                </div>
        </div>
</template>

<script>
export default {
        created(){
                this.$http.post('querySunWorkQlsx')
        }
}
</script>

<style>

</style>
