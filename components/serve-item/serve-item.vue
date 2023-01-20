<template>
	<view class="container">
		<view class="item">
			<view class="title">
				{{title}}
			</view>
			<view class="img">
				<image src="/static/my/default-arrow.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"serve-item",
		props:['title'],
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.container{
		margin-bottom: 5upx;
		background-color: #fff;
	}
	.item{
		padding-top:30upx;
		padding-bottom: 30upx;
		display: flex;
		padding-left: 25upx;
		padding-right: 25upx;
		justify-content: space-between;
	}
	.img image{
		width: 50upx;
		height: 50upx;
	}
</style>