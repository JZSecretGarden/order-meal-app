<template>
	<view style="background-color: #f1f1f1;height: 100vh;">
		<view class="">
			<image style="width: 100%;" src="https://cangdu.org/elm/static/img/activity.png" mode=""></image>
		</view>
		<view class="main">
			<view class="item">
				<image src="../../../static/my/微信支付.png" mode=""></image>
				<view class="">
					邀请微信好友
				</view>
			</view>
			<view class="item">
				<image src="../../../static/my/手机.png" mode=""></image>
				<view class="">
					邀请QQ好友
				</view>
			</view>
			<view class="item">
				<image src="../../../static/my/order.png" mode=""></image>
				<view class="">
					面对面邀请
				</view>
			</view>
		</view>
		<view class="info">
			<view class="l">
				<view>累计收益</view>
				<view>0元</view>
			</view>
			<view class="r">
				<view>成功邀请</view>
				<view>0人</view>
			</view>
		</view>
		<view class="" style="text-align: center;">
			-收益明细-
		</view>
		<view style="text-align: center;">
			赶紧去邀请好友
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
	.main{
		display: flex;
		justify-content: space-around;
		padding: 20upx 0;
		background: #fff;
		
	}
	.item image{
		width: 164upx;
		height: 164upx;
		text-align: center;
	}
	.info{
		display: flex;
		padding: 40upx 0;
	}
	.l , .r{
		width: 50%;
		text-align: center;
		border-right: 0.5upx solid #aaa;
	}
</style>
