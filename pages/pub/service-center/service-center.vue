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
		<ServeItem title='超级会员权益说明'></ServeItem>
		<ServeItem title='签到规则'></ServeItem>
		<ServeItem title='用户等级说明'></ServeItem>
		<ServeItem title='积分问题'></ServeItem>
		<ServeItem title='教我拍大片'></ServeItem>
		<ServeItem title='支付问题'></ServeItem>
		<ServeItem title='其它问题'></ServeItem>
		<ServeItem title='准时达问题'></ServeItem>
		<ServeItem title='会员说明'></ServeItem>
		<ServeItem title='会员问题'></ServeItem>
		<ServeItem title='红包问题'></ServeItem>
		<ServeItem title='活动细则'></ServeItem>
		<ServeItem title='补签规则'></ServeItem>
		<ServeItem title='优惠说明'></ServeItem>
		<ServeItem title='免责说明'></ServeItem>
		<ServeItem title='代金券说明'></ServeItem>
		<ServeItem title='商务合作'></ServeItem>
		<ServeItem title='余额问题'></ServeItem>
		<ServeItem title='超赞商家'></ServeItem>	
		<ServeItem title='匿名购买'></ServeItem>
		<ServeItem title='活动问题'></ServeItem>
	</view>
</template>
<script>
	import ServeItem from "../../../components/serve-item/serve-item.vue"
	import {$fetch_v3_profile_explain} from '../../../apis/tf-port.js'
	export default {
		components:{ ServeItem },
		data() {
			return {
				
			}
		},
		methods: {
			getServe:function(){
				$fetch_v3_profile_explain().then(res=>{
					console.log(res)
				})
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
