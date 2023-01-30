<template>
	<view class="body">
		<!-- 收货地址列表 -->
		<u-radio-group v-model="name" @change="radioGroupChange">
			<view class="address_list" v-for="(item,index) in addressList">
				<u-radio :name="item.name" active-color='#4CD964'  @change='radioChange(index)'>
					<view class="message">
						<view class="info">
							<text
								style="font-size: 36rpx; font-weight: 600;">{{item.name}}</text><text>{{item.sex==0?'女士':'先生'}}</text><text>{{item.phone}}</text>
						</view>
						<view class="street">
							{{item.address}}
						</view>
						<view class="mark">
							<text class="tag">{{item.tag}}</text><text>{{item.address_detail}}</text>
						</view>
					</view>

				</u-radio>
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
	import { $addressGetGood } from '../../../apis/zjl-port.js'
	export default {
		data() {
			return {
				addressList: '',
				name: '',
				numindex: 0
			}
		},
		methods: {
			onLoad() {
				$addressGetGood(75382).then((res) => {
					this.$data.addressList = res.data
					this.$data.name = res.data[0].name
					console.log(res);
				})

			},
			page_path() {
				uni.navigateTo({
					url: '/pages/addAddress/addAddress',
				});
			},
			radioGroupChange(e) {
				console.log(e);
			},
			radioChange(e) {
				this.$data.numindex = e
				uni.navigateBack()
			},
			onUnload() {
				uni.setStorage({
					key: "address",
					data: this.$data.addressList[this.$data.numindex]
				});
			}


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