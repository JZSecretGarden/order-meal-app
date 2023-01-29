<!-- 订单页 -->
<template>
	<view class="container">
		<scroll-view scroll-y="true" style="height: 100vh;" @scrolltolower='addPage'>
			<view class="order-item" v-for="(item,index) in data" :key="index" @click="toOrderInfo(item.id,item.restaurant_image_url)">
				<view class="restaurant_image">
					<image :src="item.restaurant_image_url" mode=""></image>
				</view>
				<view class="content">
					<view class="h-container">
						<view class="restaurant_name">
							{{item.restaurant_name}}
						</view>
						<view class="pay-state">
							支付超时
						</view>
					</view>
					<view class="time">
						{{item.formatted_created_at}}
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
							再来一单
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import {$fetch_bos_v2_users} from '../../apis/tf-port.js'
	import OrderListItem from '../../components/order-list-item/order-list-item.vue'
	export default {
		components:{
			OrderListItem
		},
		data() {
			return {
				data:[],
				order_id:'',
				page:0
			}
		},
		onLoad() {
			this.getOrderList()
		},
		methods: {
			getOrderList:function(){
				let id = 1
				$fetch_bos_v2_users(1,{
					limit:10,
					offset:this.page
				}).then(res=>{
					res.data.forEach(item=>{https://elm.cangdu.org/img/
						item.restaurant_image_url = 'https://elm.cangdu.org/img/'+item.restaurant_image_url
						this.data.push(item)
					})
					console.log(res)
					
					// this.data = res.data
				})
			},
			toOrderInfo(id,img){
				uni.navigateTo({
					url:'/pages/pub/order_info/order_info?order_id='+id+'&img='+img
				})
			},
			addPage(){
				this.page = this.page+1
				this.getOrderList()
			}
		}
	}
</script>

<style scoped>
	.container{
		background-color: #F5F5F5;
		height: 100vh;
	}
	.order-item{
		margin-bottom: 20upx;
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
