<template>
	<view class="scontainer">
		<view class="header">
			<view class="h-item">
				<view class="pic">
					<image src="/static/my/客服.png" mode=""></image>
				</view>
				<view class="tip">
					在线客服
				</view>
			</view>
			<view class="h-item">
				<view class="pic">
					<image src="/static/my/电话.png" mode=""></image>
				</view>
				<view class="tip">
					在线客服
				</view>
			</view>
		</view>
		<view class="mid">
			热门问题
		</view>
		<view class="" @click="toItem(data.supervipContent)">
			<ServeItem title='超级会员权益说明'></ServeItem>
		</view>
		<view class="" @click="toItem(data.signContent)">
			<ServeItem title='签到规则'></ServeItem>
		</view>
		<view class="" @click="toItem(data.rankContent)">
			<ServeItem title='用户等级说明'></ServeItem>
		</view>
		<view class="" @click="toItem(data.pointtextContent)">
			<ServeItem title='积分问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.phototutorialContent)">
			<ServeItem title='教我拍大片'></ServeItem>
		</view>
		<view class="" @click="toItem(data.paymentContent)">
			<ServeItem title='支付问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.otherContent)">
			<ServeItem title='其它问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.ontimeContent)">
			<ServeItem title='准时达问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.memberFullCutContent)">
			<ServeItem title='会员说明'></ServeItem>
		</view>
		<view class="" @click="toItem(data.memberContent)">
			<ServeItem title='会员问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.hongbaoContent)">
			<ServeItem title='红包问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.freshmanContent)">
			<ServeItem title='活动细则'></ServeItem>
		</view>
		<view class="" @click="toItem(data.forgotContent)">
			<ServeItem title='补签规则'></ServeItem>
		</view>
		<view class="" @click="toItem(data.discountContent)">
			<ServeItem title='优惠说明'></ServeItem>
		</view>
		<view class="" @click="toItem(data.disclaimerContent)">
			<ServeItem title='免责声明'></ServeItem>
		</view>
		<view class="" @click="toItem(data.couponContent)">
			<ServeItem title='代金券说明'></ServeItem>
		</view>
		<view class="" @click="toItem(data.businessContent)">
			<ServeItem title='商务合作'></ServeItem>
		</view>
		<view class="" @click="toItem(data.balanceContent)">
			<ServeItem title='余额问题'></ServeItem>
		</view>
		<view class="" @click="toItem(data.awesomeRestaurantContent)">
			<ServeItem title='超赞商家'></ServeItem>
		</view>
		<view class="" @click="toItem(data.anonymousBuyContent)">
			<ServeItem title='匿名购买'></ServeItem>
		</view>
		<view class="" @click="toItem(data.memberTimesContent)">
			<ServeItem title='活动问题'></ServeItem>
		</view>
	</view>
</template>
<script>
	import ServeItem from "../../../components/serve-item/serve-item.vue"
	import {$fetch_v3_profile_explain} from '../../../apis/tf-port.js'
	export default {
		components:{ ServeItem },
		data() {
			return {
				data:''
			}
		},
		onLoad() {
			this.getServe()
		},
		methods: {
			getServe:function(){
				$fetch_v3_profile_explain().then(res=>{
					this.data = res.data
					console.log(res)
				})
			},
			
			toItem(data){
				uni.navigateTo({
					url: '/pages/pub/serve-info/serve-info?='+data
				});
			}
		}
	}
</script>

<style scoped>
	.scontainer{
		background-color: #F5F5F5;
	}
	.header{
		display: flex;
		margin-bottom: 5upx;
		
	}
	.h-item{
		width: 50%;
		background-color: #fff;
		text-align: center;
		border-radius: 0px 1px 0px 0px #ddd;
		padding-top:40upx;
		padding-bottom:40upx;
	}
	.mid{
		padding: 40upx 20upx;
		background-color: #fff;
		margin-bottom: 5upx;
	}
	.pic image{
		width: 50upx;
		height: 50upx;
	}
</style>
