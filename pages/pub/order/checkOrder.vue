<template>
	<view>
		<!-- 收货地址选择 -->
		<view class="pad">
			<u-icon name="map" color="#3190E8" size='50'></u-icon>
			<!-- 有地址时显示 -->
			<view class="message" v-if="address!=''">
				<view class="info">
					<text
						style="font-size: 36rpx; font-weight: 600;">{{address.name}}</text><text>{{address.sex==0?'女士':'先生'}}</text><text>{{address.phone}}</text>
				</view>
				<view class="street">
					{{address.address}}
				</view>
				<view class="mark">
					<text class="tag">{{address.tag}}</text><text>{{address.address_detail}}</text>
				</view>
			</view>
			<!-- 没有地址是选择 -->
			<view class="message" v-if="address==''">
				请选择一个收货地址
			</view>
			<u-icon name="arrow-right" color="#999999" size='50' @click="addressPath"></u-icon>
		</view>
		<view class="line">
		</view>
		<!-- 送达时间 -->
		<view class="arriveTime pad">
			<view class="arriveText">送达时间</view>
			<view class="finish">
				<view class="finish_top">
					<text space="ensp" decode='true'>尽快送达 | 预计{{allData.delivery_reach_time}}</text>
				</view>
				<view class="finish_bot">
					<text style="background-color: #3190E8; ; color: white;padding: 2rpx 10rpx;border-radius: 8rpx;float: right;">蜂鸟专送</text>		
				</view>
			</view>
		</view>
		<!-- 支付方式 -->
		<view class="pay pad">
			<view class="way">
				支付方式
			</view>
			<view class="pay_line" @click="openPop">
				<text space="ensp" decode='true'>在线支付 </text><u-icon name="arrow-right" color="#aaa" size='30'></u-icon>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup v-model="show" mode="bottom" height="30%" >
		      <view class="pop_top"><view class="way">支付方式</view></view>
		      
		      <u-radio-group v-model="value" width='100%'>
		       <u-radio width='100%' disabled='ture'> <text style="color: #ccc;">货到付款(商家不支持货到付款)</text></u-radio>
		       <u-radio width='100%' active-color='#4cd964' name='online'> 在线支付</u-radio>
		      </u-radio-group>
		   </u-popup>
		<view class="red pad">
			<text>红包</text><text>暂时只在饿了么 APP 中支持</text>
		</view>
		<!-- 结算商品信息 -->
		<view class="good_top pad">
			<view class="effect">
				<img :src="'https://elm.cangdu.org/img/'+allData.cart.restaurant_info.image_path" alt="" style='width: 50rpx;height: 50rpx;'><text style="margin-left: 10rpx; font-size: 36rpx;" > {{allData.cart.restaurant_info.name}}</text>
			</view>
		</view>
		<view class="pad good_info ">
			<view class="good" v-for="(item,index) in allData.cart.groups" :key='index'>
				<view>{{item[0].name}}</view><view ><text style="color: #f60;">x{{item[0].quantity}}</text><text>￥{{item[0].price}}</text></view>
			</view>
			<view class="good" v-for="item in allData.cart.extra">
				<view>{{item.name}}</view><text>￥{{item.price}}</text>
			</view>
			<view class="good">
				<view>配送费</view><text>￥{{allData.cart.deliver_amount}}</text>
			</view>
		</view>
		<view class="good pad" style="padding-left:30rpx ;padding-right: 30rpx;">
				<view>订单</view><text style="color: #f60;">￥{{allData.cart.original_total}}</text>
		</view>
		<!-- 备注 -->
		<view class="remark pad">
			<view class="way">
				订单备注
			</view>
			<view class="pay_line">
				<text space="ensp" decode='true'>{{markInfo}} </text><u-icon name="arrow-right" color="#aaa" size='30' @click="remarkPath">132</u-icon>
			</view>
		</view>
		<!-- 发票invoice -->
		<view class="invoice pad">
			<view class="way">
				发票抬头
			</view>
			<view class="pay_line">
				<text space="ensp" decode='true'>{{allData.invoice.status_text}}</text><u-icon name="arrow-right" color="#aaa" size='30' @click="invoicekPath">132</u-icon>
			</view>
		</view>
		<!-- 下单按钮栏 -->
		<view class="end">
			<view class="left">
				<view style="font-size: 34rpx;">待支付￥{{allData.cart.original_total}}</view>
			</view>
			<view class="right" @click="payPath">
				确认下单
			</view>
		</view>
	
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allData:{},	//当前购物车数据
				address: '',
				time: '',
				show:false,
				value:"online",
				markInfo:'口味、偏好等'
			}
		},
		methods: {
			addressPath() {
				uni.navigateTo({
					url: '/pages/choseAddress/choseAddress'
				})
			},
			remarkPath(){
				uni.navigateTo({
					url:'/pages/remark/remark'
				})
			},
			invoicekPath(){
				uni.navigateTo({
					url:'/pages/invoice/invoice'
				})
			},
			payPath(){
				uni.navigateTo({
					url:'/pages/payLine/payLine'
				})
			},
			openPop(){
				this.show = true
				console.log(this.show)
			}
		},
		onLoad(option) {
			let _this = this
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('carData', function(data) {
				console.log(_this)
				_this.allData = data.data
				console.log(_this.allData)
			})
		},
		onShow() {
			let _this = this
			uni.getStorage({
				key: 'address',
				success(e) {
					_this.$data.address = e.data
				}
			})
			uni.getStorage({
				key:'markInfo',
				success(e) {
					if(e.data[0]=='、'){
						e.data=e.data.substr(1,e.data.length)
						_this.$data.markInfo = e.data
					}					
				}
			})
		
		},
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
		padding-bottom: 100rpx;
	}

	/* 每个部分相同的内边距等样式 */
	.pad {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		background-color: white;
	}

	.message {
		margin-left: 20rpx;
		flex: 1;
	}

	text {
		margin-right: 20rpx;
	}

	.tag {
		background-color: #FF5722;
		padding: 0 14rpx;
		border-radius: 14rpx;
		color: white;

	}

	.line {
		width: 100%;
		height: 100%;
		height: 5rpx;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=');
	}

	.arriveTime {
		margin-top: 30rpx;
		border-left: 8rpx solid #3190e8;
		;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.arriveText {
		font-size: 36rpx;
		font-weight: 600;
		padding: 0 10rpx;
	}

	.finish {
		padding: 20rpx 0;
		box-sizing: border-box;
	}

	.finish_top {
		color: #3190e8;
		font-size: 32rpx;
	}

	.finish_bot {
		width: auto;
		margin-top: 20rpx;
	}
	.pay{
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #dcdcdc;
	}
	.way{
		font-size: 30rpx;
	}
	.pay_line{
		display: flex;
		align-items: center;
		color: #aaa;
	}
	.pop_top{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20%;
		background-color: #fafafa;
	}
	.u-radio{
		display: flex;
		flex-direction:row-reverse;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
	}
	.u-radio-group{
		width: 100%;
	}
	.red{
		color: #ccc;
		display: flex;
		justify-content: space-between;
	}
	.good_top{
		margin-top: 20rpx;
		border-bottom: 2rpx solid #dcdcdc;
	}
	.effect{
		display: flex;
		align-items: center;
	}
	.good_info{
		flex-direction: column;
		padding-bottom: 0;
		border-bottom: 2rpx solid #dcdcdc;
	}
	.good{
		padding: 15rpx 0;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.remark{
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	.invoice{
		display: flex;
		justify-content: space-between;
		border-top:2rpx solid #dcdcdc;
	}
	.end{
		width: 100%;
		height: 100rpx;
		background-color: hotpink;
		position: fixed;
		bottom: 0;
		display: flex;
	}
	.left{
		padding-left: 30rpx;
		flex: 1;
		background-color: #3C3C3C;
		color: white;
		display: flex;
		align-items: center;
	}
	.right{
		padding: 30rpx 35rpx;
		background-color: #56D176;
		color: white;
		font-size: 34rpx;
	}
</style>