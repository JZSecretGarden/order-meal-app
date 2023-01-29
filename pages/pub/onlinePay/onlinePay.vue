<template>
	<view class="container">
		<view class="header">
			<view class="tip">
				支付剩余时间
			</view>
			<view class="time">
				00 : 10 : 01
			</view>
		</view>
		<view class="paymethod">
			选择支付方式
		</view>
		<radio-group @change="radioChange">
		<view class="item">
			<image src="../../../static/my/支付宝.png" mode="" style="width: 100upx;height: 100upx; margin-right: 20upx;"></image>
			<view class="title">
				支付宝
			</view>
			<label class="radio" style="text-align: right; flex: 1;">
				<radio value="zfb" /><text></text>
			</label>
		</view>
		<view class="item">
			<image src="../../../static/my/微信支付.png" mode="" style="width: 100upx;height: 100upx; margin-right: 20upx;"></image>
			<view class="title">
				微信
			</view>
			<label class="radio" style="text-align: right; flex: 1;">
				<radio value="wx" /><text></text>
			</label>
		</view>
		</radio-group >
		<view class="btn">
			<button @click='hint' style="background-color: #4CD964;color:#fff;font-weight: 700;">确认支付</button>
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
			hint(){
				uni.showToast({
					title:'当前环境无法支付，请打开官方App进行付款',
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
		background-color: #fff;
		text-align: center;
		padding-top:80upx;
		padding-bottom: 80upx;
	}
	.time{
		font-size: 80upx;
	}
	.paymethod{
		background-color: #F1F1F1;
		padding: 20upx;
	}
	.item{
		background-color: #fff;
		padding: 20upx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #F1F1F1;
	}
	.btn{
		padding: 20upx 25upx;
	}
</style>
