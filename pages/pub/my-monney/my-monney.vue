<template>
	<view class="container">
		<view class="header">
			<view class="content">
				<view class="tip">
					<view class="tip-l">
						当前余额
					</view>
					<view class="tip-r" @click="moneyIntro">
						余额说明
					</view>
				</view>
				<view class="money">
					0.00元
				</view>
				<view class="btn">
					<button style="border: none;background-color: #CCCCCC;color: #fff;">提现</button>
				</view>
			</view>
		</view>
		<view class="" style="padding: 20upx;color: #777;">
			交易明细
		</view>
		<view class="" style="text-align: center;">
			<image src="../../../static/my/yue.png" mode="" style="width: 350upx;height: 230upx;"></image>
			<view class="" style="text-align: center;color: #777;padding: 30upx;">
				暂无明细记录
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
			moneyIntro(){
				uni.navigateTo({
					url:'/pages/pub/money-intro/money-intro'
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
