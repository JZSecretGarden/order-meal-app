<!-- 我的页面 -->
<template>
	<view class="container">
		<view class="header">
			<view class="content">
				<view class="avatar" @click="toUserInfo(userinfo.avatar)">
					<image :src="userinfo.avatar" mode=""></image>
				</view>
				<view class="phone">
					<view class="number" @click="toLogin">
						{{userinfo.username}}
					</view>
					<view class="tip">
						{{userinfo.mobile}}
					</view>
				</view>
				<view class="arrow">
					<image src="../../static/my/arrow-in.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main-top">
			<view class="main-top-item" @click="toMoney">
				<view class="money">
					<text>{{userinfo.balance}}</text>元
				</view>
				<view class="tip">
					我的余额 
				</view>
			</view>
			<view class="main-top-item" @click="mydiscont">
				<view class="sale">
					<text>{{userinfo.gift_amount}}</text>个
				</view>
				<view class="tip">
					我的优惠
				</view>
			</view>
			<view class="main-top-item">
				<view class="points">
					<text>{{userinfo.point}}</text>分
				</view>
				<view class="tip" @click="myPoints">
					我的积分
				</view>
			</view>
		</view>
		<view class="main-mid">
			<MyListItem url='/pages/order/order' pic='../../static/my/order.png' txt="我的订单"></MyListItem>
			<MyListItem url='/pages/pub/points/points' pic='../../static/my/points.png' txt="积分商城"></MyListItem>
			<MyListItem :url='memberUrl' pic='../../static/my/crown.png' txt="饿了么会员卡"></MyListItem>
		</view>
		<view class="main-mid">
			<MyListItem url='/pages/pub/service-center/service-center' pic='../../static/my/squre.png' txt="服务中心"></MyListItem>
			<MyListItem url='/pages/pub/download/download' pic='../../static/my/eleme.png' txt="下载饿了么APP"></MyListItem>
		</view>
	</view>
</template>

<script>
	import {$fetch_v1_user} from '../../apis/tf-port.js'
	import MyListItem from '../../components/my-list-item/my-list-item.vue'
	export default {
		components:{MyListItem},
		data() {
			return {
				userinfo:'',
				phoneNumber:"登录/注册",
				h_tip:'暂无绑定手机号',
				money:'0.00',
				sale:'3',
				points:'0',
				memberUrl:''
				
				
			}
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url:'/pages/pub/login/login'
				})
			},
			toUserInfo(avatar){
				uni.navigateTo({
					url:'/pages/pub/user-info/user-info?avatar='+avatar
				})
			},
			getUser(){
				$fetch_v1_user({user_id:1}).then(res=>{
					console.log(res)
					if(res.data.is_mobile_valid == true){
						res.data.mobile = this.h_tip
					}
					res.data.avatar = 'https://elm.cangdu.org/img/'+res.data.avatar
					this.userinfo = res.data
					this.memberUrl = '/pages/pub/member/member?name='+res.data.username
				})
			},
			toMoney(){
				uni.navigateTo({
					url:'/pages/pub/my-monney/my-monney'
				})
			},
			myPoints(){
				uni.navigateTo({
					url:'/pages/pub/my-points/my-points'
				})
			},
			mydiscont(){
				uni.navigateTo({
					url:'/pages/pub/discount-coupon/discount-coupon'
				})
			}
		}
	}
</script>

<style scoped >
	.container{
		background-color: #F5F5F5;
		height: 100vh;
	}
	.header{
		background-color: #3190E8;
		padding: 32upx;
		margin-top: 4upx;
		box-sizing: border-box;
	}
	
	.header .content{
		display: flex;
		align-items: center;
	}
	.header .avatar{
		padding-right: 24upx;
	}
	.header .avatar  image{
		width: 134upx;
		height:134upx;
		border-radius: 134upx;
	}
	.header .phone{
		flex: 1;
	}
	.header .phone .number{
		font-size: 40upx;
		font-weight: bold;
		color:#fff;
		margin-bottom: 14upx;
	}
	.header .phone .tip{
		color: #fff;
	}
	.header .arrow image{
		width: 60upx;
		height:60upx;
	}
	.main-top{
		display: flex;
		justify-content: space-between;
	}
	
	.main-top .main-top-item{
		padding: 40upx 0;
		width: 33%;
		background-color: #fff;
		text-align: center;
		box-sizing: border-box;
	}
	.main-top-item .money{
		/* font-size: 62upx;
		color: #FF9900; */
	}
	.main-top-item .money  text{
		font-size: 58upx;
		font-weight: bold;
		color: #FF9900;
	}
	.main-top-item .sale  text{
		font-size: 58upx;
		font-weight: bold;
		color: #FF5F3E;
	}
	.main-top-item .points  text{
		font-size: 58upx;
		font-weight: bold;
		color: #6AC20B;
	}
	image{
		width: 50upx;
		height: 50upx;
	}
	.main-mid{
		margin-top: 20upx;
	}
	.main-mid-item{
		display: flex;
		background-color: #fff;
		align-items: center;
	}
	.main-mid-item .img{
		padding:20upx 10upx;
	}
	.content-item{
		padding:20upx 10upx;
		display: flex;
		flex:1;
		padding-right: 20upx;
		box-shadow: 0px 1px 0px 0px #ddd;
	}
	.title{
		flex: 1;
	}
</style>
