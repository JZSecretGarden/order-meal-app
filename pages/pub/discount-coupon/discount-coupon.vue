<template>
	<view class="container">
		<view class="menu">
			<view class="menu-item">
				<view class="name">
					红包
				</view>
			</view>
			<view class="menu-item">
				<view class="name">
					商家代金券
				</view>
			</view>
		</view>
		<swiper :indicator-dots="false"   style="flex: 1;">
			<swiper-item>
				<view class="swiper-item">
					<view class="top">
						<view class="tip">
							<view class="tip-l">
								有<text>3</text>个红包即将到期
							</view>
							<view class="tip-r" @click="hongbaoIntro">
								红包说明
							</view>
						</view>
						<view class="main">
							<view class="main-item-c" v-for="(item,index) in data" :key="index" style="border-radius: 20upx;border-top: #FF5340 solid 10upx;">
								<view class="main-item" >
									<view class="m-l">
										<view class="price" style="color: #FF5340; font-size: 40upx;">
											<text style="font-size: 12upx;">￥</text>{{item.amount}}
										</view>
										<view class="majian" style="font-size: 12upx;margin-top: 10upx;color: #aaa;padding-right: 10upx;">
											{{item.description_map.sum_condition}}
										</view>
									</view>
									<view class="m-m">
										<view class="min">
											{{item.name}}
										</view>
										<view class="time" style="font-size: 12upx;color: #aaa;">
											{{item.description_map.validity_periods}}到期
										</view>
										<view class="limit" style="font-size: 12upx;color: #aaa;">
											限收货手机号为{{item.phone}}
										</view>
									</view>
									<view class="m-r">
										{{item.description_map.validity_delta}}
									</view>
								</view>
							</view>
							
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		<view class="menu">
			<view class="menu-item">
				<view class="name">
					兑换有奖
				</view>
			</view>
			<view class="menu-item" style="border-left: 1px solid #f5f5f5;">
				<view class="name">
					推荐有奖
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import {$fetch_bos_v2_users_hongbaos} from '../../../apis/tf-port.js'
	export default {
		data() {
			return {
				data:''
			}
		},
		onLoad() {
			this.getHongbaos()
		},
		methods: {
			getHongbaos(){
				$fetch_bos_v2_users_hongbaos(1,{limit:20,offset:0}).then(res=>{
					console.log(res)
					this.data = res.data
				})
			},
			hongbaoIntro(){
				uni.navigateTo({
					url:'/pages/pub/point-intro/point-intro'
				})
			}
		}
	}
</script>

<style scoped>
	
	.container{
		height: 92vh;
		background-color: #F5F5F5;
		display: flex;
		flex-direction: column;	
			}
	.menu{
		display: flex;
		
	}
	.menu-item{
		width: 50%;
		background-color: #fff;
		padding: 20upx 0;
		text-align: center;
	}
	.name{
		margin: 0 auto;
		display: inline-block;
		padding: 15upx 0;
		
	}
	.top{
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
	.main{
		padding: 30upx 20upx;
		
	}
	.main-item{
		border-top: 5upx dashed #FF5340;
		display: flex;
		padding: 20upx;
		background-color: #ffff;
		margin-bottom: 20upx;
		border-radius: 20upx;
	}
	.m-m{
		flex:1;
		padding-left: 20upx;
		padding-right: 20upx;
	}
</style>
