<template>
	<view class="container">
		<view class="header">
			<view class="content">
				<view class="tip">
					<view class="tip-l">
						当前积分
					</view>
					<view class="tip-r" @click="pointIntro">
						积分说明
					</view>
				</view>
				<view class="money">
					0分
				</view>
				<view class="btn">
					<button @click='hint' style="border: none;background-color: #FE6D47;color: #fff;">积分兑换商品</button>
				</view>
			</view>
		</view>
		<view class="" style="padding: 20upx;color: #777;">
			最近30天积分记录
		</view>
		<view class="" style="text-align: center;">
			<image src="../../../static/my/yue.png" mode="" style="width: 350upx;height: 230upx;"></image>
			<view class="" style="text-align: center;color: #777;padding: 30upx;">
				最近30天无积分记录
			</view>
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
			pointIntro(){
				uni.navigateTo({
					url:'/pages/pub/point-intro/point-intro'
				})
			},
			hint(){
				uni.showToast({
					title:'快去下单赚取大量积分吧',
					icon:'error',
					mask:true
				})
				
			}
		}
	}
</script>

<style scoped>
	.container{
		height: 100vh;
		background-color: #F5F5F5;
	}
	.header{
		background-color: #3190E8;
		padding: 20upx;
	}
	.content{
		background-color: #fff;
		padding: 20upx;
	}
	.tip{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20upx;
	}
	.tip-r{
		color: #3190E8;
	}
	.money{
		font-size: 80upx;
		margin-bottom: 40upx;
	}
	.btn{
		padding:0 20upx;
	}
</style>
