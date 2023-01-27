<template>
	<view class="content">
		{{data}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:''
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.data = option['']
				console.log(option); //打印出上个页面传递的参数。
			},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content{
		font-weight: bold;
	}
</style>
