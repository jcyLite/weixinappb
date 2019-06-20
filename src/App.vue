<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
	export default {
		data(){
			return {
				active:false
			}
		},
		watch:{
			$route(to){
				if(['/qlsxtitle','/center','/hotQlsx','/getBusinessListTop','/queryQlsx','/queryXzspQlsxlistbyagent','/datingxinxi','/getbusinessinfo','/queryQuestionList','/saveConsulteComplaint','/reserveList','/queryFeedback'].indexOf(to.fullPath)!=-1){
					this.active=false
				}else{
					this.active=true
				}
				document.title=to.meta.title;
			}
		},
		mounted(){
			document.title=this.$route.meta.title;
		}
	}
</script>
<style lang="less">
	@import './image/style.css';
	.fade-enter,.fade-leave-active{
		opacity:0;
	}
	.view{
		transition:.3s all;
	}
	body{
		margin:0;
		pre{
			font-size:14px;
			text-align: left;
		}
		#app{
			height:100vh;
			background:#F2F2F2;
			.tk-header{
				display: none;
			}
			.tk-bottom-bar{
				transition:.3s all;
				transform: translateY(100%);
				&.active{
					transform:translateY(0);
				}
			}
		}
		.tk-scroll{
			height:calc(100vh);
		}
	}
</style>
