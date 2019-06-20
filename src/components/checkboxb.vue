<template>
	<div>
		<div 
			
			class="checkboxb"
			@click="active.indexOf(index)==-1?
			active.push(index):
			active.splice(active.indexOf(index),1)"
			:class="{
			active:active.indexOf(index)!=-1
		}" style="width:50px;height:50px;border:1px solid #ddd;"
		v-for="item,index of [0,1,2,3]">
			
		</div>
	</div>
</template>

<script>export default {
	data() {
		return {
			active: []
		}
	},
	props:['value'],
	watch:{
		value(newV){
			this.active=newV;
		},
		active(newV){
			this.$emit('input',newV)
		}
	}
}</script>

<style></style>