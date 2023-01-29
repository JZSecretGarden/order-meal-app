<template>
	<view class="container">
		<view class="header">
			为账户 <text>13476584673</text> 购买会员
		</view>
		<view class="m-container">
			<view class="m-title">
				<view class="title-left">
					会员特权
				</view>
				<view class="title-right">
					会员说明 >
				</view>
			</view>
		</view>
		<view class="member-item">
			<MemberItem img='../../../static/my/下载.jfif' title='减免配送费' info='每月减免30单,每日可减免3单,每单最高减4元' express='蜂鸟专送专享' ></MemberItem>
			<MemberItem img='../../../static/my/ps.jfif' title='减免配送费' info='每月减免30单,每日可减免3单,每单最高减4元' express='蜂鸟专送专享' ></MemberItem>
		</view>
		<view class="openContainer">
			<view class="content">
				<view class="open-title">
					开通会员
				</view>
				<view class="flexContainer">
					<view class="price">
						<text>1个月</text>
						<text>￥20</text>
					</view>
					<view class="buy">
						购买
					</view>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="l">
				兑换会员
			</view>
			<view class="r">
				使用卡号卡密 >
			</view>
		</view>
		<view class="item">
			<view class="l">
				购买记录
			</view>
			<view class="r">
				开发票 >
			</view>
		</view>
	</view>
</template>

<script>
	import MemberItem from '../../../components/member-item/member-item.vue'
	export default {
		components:{
			MemberItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.container{
	height: 100vh;
	background-color: #F5F5F5;
}
.header{
	padding:20upx;
}
.header text{
	font-weight: bold;
}
.m-container{
	padding-left: 40upx;
	background-color: #fff;
}
.m-title{
	display: flex;
	justify-content: space-between;
	padding:20upx;
	padding-left: 0upx;
	border-bottom: 1px solid #ddd;
}
.title-left{
	font-size: 40upx;
}
.title-right{
	color: #aaa;
}
.member-item{
	margin-bottom: 20upx;
}
.openContainer{
	background-color: #fff;
	padding-left: 40upx;
}
.open-title{
	padding-top: 20upx;
	font-size: 40upx;
	padding-bottom: 20upx;
	border-bottom: 1upx solid #ddd;
}
.flexContainer{
	display: flex;
	padding: 30upx;
	padding-left: 0upx;
	justify-content: space-between;
}
.price{
	font-size: 38upx;
}
.price text:nth-child(2){
	color: #FF6600;
	font-weight: bold;
}
.buy{
	border: #FF6600 1px solid;
	color: #FF6600;
	padding:6upx 25upx;
	border-radius: 10upx;
}
.item{
	display: flex;
	justify-content: space-between;
	margin-top: 20upx;
	background-color: #fff;
	padding: 20upx;
	font-size: 35upx;
}
.r{
	color: #aaa;
}
</style>
