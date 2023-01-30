<template>
	<view class="body">
		<!-- 收货地址列表 -->
		<u-radio-group v-model="name" @change="radioGroupChange">
			<view class="address_list" v-for="(item,index) in addressList">
				<u-radio :name="item.name" active-color='#4CD964' style="max-width: 600upx;"  @change='radioChange(index)'>
					<view class="message">
						<view class="info">
							<text	style="font-size: 36rpx; font-weight: 600;">{{item.name}}</text><text>{{item.sex==0?'女士':'先生'}}</text>
							<text>{{item.phone}}</text>
						</view>
						<view class="street">
							{{item.address}}
						</view>
						<view class="mark">
							<text class="tag">{{item.tag}}</text><text>{{item.address_detail}}</text>
						</view>
					</view>
				</u-radio>
				<u-button size="mini" type="error" style="width: 100upx;margin: 0;" @click="deleteAddress(item)">删除</u-button>
			</view>
		</u-radio-group>
		<!-- 新增收货地址 -->
		<view class="add">
			<view class="add_path" @click="page_path">
				<view @click="ss">
					<u-icon name="plus-circle" style="font-size: 50rpx;margin-right: 5rpx;"></u-icon>
				</view>
				<view><text style="font-size: 30rpx;">新增收货地址</text></view>
			</view>

		</view>
	</view>
</template>

<script>
	import { $address_list, $user_msg, $del_address } from '../../../apis/jz-port.js'
	export default {
		data() {
			return {
				name: '',
				numindex: 0,
				userId:2,
				addressList:[]
			}
		},
		onLoad() {
			// $user_msg().then(val=>{
			// 	console.log(val)
			// })
			$address_list(this.userId).then(val=>{
				console.log(val)
				this.addressList=val.data
			})
		
		},
		methods: {
			page_path() {
				uni.navigateTo({
					url: '/pages/pub/order/addAddress',
				});
			},
			radioGroupChange(e){
				console.log(e);
			},
			radioChange(e){
				this.$data.numindex = e
				uni.navigateBack()
			},
			deleteAddress(item){
				console.log(item)
				$del_address(item).then(val=>{
					this.$router.go(0)
				})
			}
		},
		onUnload() {
			uni.setStorage({
				key: "address",
				data: this.$data.addressList[this.$data.numindex]
			});
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.body {
		width: 100%;
		height: 100%;

	}

	.add {
		width: 100%;
		height: 60px;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.add_path {
		display: flex;
		align-items: center;
		color: #3190e8;
		font-weight: 200;

	}

	.address_list {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.u-radio-group {
		width: 100%;
	}

	.message {
		margin-left: 20rpx;
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
</style>