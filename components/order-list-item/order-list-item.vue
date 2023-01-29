<!-- 订单组件 -->
<template>
	<view class="container" @click="getOrderList()">
		<view class="order-item">
			<view class="restaurant_image">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="content">
				<view class="h-container">
					<view class="restaurant_name">
						效果演示
					</view>
					<view class="pay-state">
						等待支付
					</view>
				</view>
				<view class="time">
					2023-01-16 10:17
				</view>
				<view class="m-container">
					<view class="good">
						阿斯顿 等2件商品
					</view>
					<view class="price">
						￥390.00
					</view>
				</view>
				<view class="pay-Cotainer">
					<view class="pay">
						去支付(还剩14分44秒）
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {$fetch_bos_v2_users} from '../../apis/tf-port.js'
	export default {
		name:"order-list-item",
		props:[],
		data() {
			return {
				
			};
		},
		onLoad() {
			this.getOrderList()
		},
		methods:{
			getOrderList:function(){
				let id = 1
				$fetch_bos_v2_users(1,{
					limit:10,
					offset:0
				}).then(res=>{
					console.log(res)
				})
			},
			
		}
	}
</script>

<style scoped>
	.container{
		background-color: #F5F5F5;
		height: 100vh;
	}
	.order-item{
		background-color: #fff;
		padding:15upx;
		display: flex;
	}
	.restaurant_image image{
		width: 86upx;
		height: 92upx;
	}
	.content{
		padding-left:20upx;
		flex: 1;
	}
	.h-container{
		display: flex;
		justify-content: space-between;
		padding-right: 5upx;
	}
	.restaurant_name{
		font-size: 36upx;
	}
	.time{
		font-size: 20upx;
		color: #999999;
		margin-bottom: 20upx;
	}
	.m-container{
		padding: 30upx 0;
		display: flex;
		justify-content: space-between;
		border-top: 1upx solid #ddd;
		border-bottom: 1upx solid #ddd;
	}
	.good{
		color: #555;
	}
	.price{
		font-weight: bold;
		color: #FF6600;
	}
	.pay-Cotainer{
		margin-top: 14upx;
		text-align: right;
	}
	.pay{
		display: inline-block;
		font-size: 12px;
		border: 1px solid #FF6600;
		padding: 5upx;
		color: #ffaa00;
		border-radius: 10upx;
	}
</style>