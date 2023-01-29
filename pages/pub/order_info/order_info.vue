<template>
	<view class="container">
		<view class="header">
			<image :src="img" mode="" style="width: 164upx;height: 164upx;"></image>
			<view class="state">
				支付超时
			</view>
			<view class="btn">
				再来一单
			</view>
		</view>
		<view class="mid">
			<view class="" style="margin-bottom: 2upx;">
				<MyListItem url='/pages/order/order' :pic='img' txt="我的订单"></MyListItem>
			</view>
			<view class="good" style="display: flex;">
				<view>222222222</view>
				<view style="flex: 1;text-align: right;padding-right: 20upx;">X1</view>
				<view>￥20</view>
			</view>
			<view class="good" style="display: flex;justify-content: space-between;">
				<view>配送费</view>
				<view>4</view>
			</view>
			<view class="good" style="font-weight: bold;color:#FB6B23;text-align: right: ;;">
				实付372.00元
			</view>
		</view>
		<view class="info">
			<view class="title">
				配送信息
			</view>
			<view class="item">
				送达时间：尽快送达
			</view>
			<view class="item" style="display: flex;">
				<view class="">
					送达地址：
				</view>
				<view class="content">
					<view class="address" style="margin-bottom: 10upx;">
						{{data.consignee}}
					</view>
					<view class="">
						{{data.addressDetail}}
					</view>
				</view>
			</view>
			<view class="item">
				配送方式：蜂鸟配送
			</view>
		</view>
		<view class="info">
			<view class="title">
				订单信息
			</view>
			<view class="item">
				订单号：{{id}}
			</view>
			<view class="item">
				支付方式：{{data.pay_method}}
			</view>
			<view class="item">
				下单时间：蜂鸟配送
			</view>
		</view>
	</view>
</template>

<script>
	import MyListItem from '../../../components/my-list-item/my-list-item.vue'
	import {
		$fetch_bos_v1_users
	} from '../../../apis/tf-port.js'
	export default {
		components: {
			MyListItem
		},
		data() {
			return {
				id: '',
				data: '',
				img: ''
			}
		},
		onLoad(option) {
			console.log(option)
			this.id = option.order_id
			this.img = option.img
			this.getOrderInfo()
		},
		methods: {
			getOrderInfo() {
				$fetch_bos_v1_users(1, this.id).then(res => {
					console.log(res)
					this.data = res.data
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		background-color: #F1F1F1;
	}

	.header {
		text-align: center;
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.state {
		font-weight: bold;
		font-size: 40upx;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	.btn {
		display: inline-block;
		padding: 10upx 12upx;
		border: 1upx solid #3190E8;
		color: #3190E8;
		margin-bottom: 20upx;


	}

	.mid {
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.good {
		padding: 20upx;
		background-color: #fff;
	}

	.info {
		margin-bottom: 20upx;
		background-color: #fff;
	}

	.title {
		border-bottom: 1px solid #f1f1f1;
		padding: 20upx;
		font-size: 40upx;
	}

	.item {
		padding: 20upx;
	}
</style>
