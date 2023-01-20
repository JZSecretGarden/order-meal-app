<!-- 积分商城 -->
<template>
	<view class="container">
		<view class="title">
			请重新进入
		</view>
		<view class="tip">
			请返回后重新进入积分商城或活动~
		</view>
		<view class="img">
			<image src="../../../static/my/retrylogin.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.container{
		height: 100vh;
		background-color: #F0F0F0;
	}
	.title{
		font-size: 60upx;
		color: #0D7FD5;
		font-weight: bold;
		text-align: center;
		padding-top: 200upx;
		padding-bottom: 35upx;
	}
	.tip{
		text-align: center;
		padding-bottom: 40upx;
	}
	.img{
		text-align: center;
	}
	image{
		height: 500upx;
		width: 500upx;
	}
</style>
