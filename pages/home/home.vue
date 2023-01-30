<!-- 外卖页面 -->
<template>
	<view class="home-box">
		<view class="home-box-top">
			<view class="home-top-serch">
				<view class="search">上到</view>
				<view class="adress">成都环球中心天堂沙发啊</view>
				<view class="login" @click="gotoLogin()">登录|注册</view>
			</view>
			<swiper class="home-top-wripper" indicator-dots>
				<swiper-item style="display: flex; flex-wrap: wrap;">
					<view class="wripper-food" v-for="item in foodClassifitonone" :key="item.title"
						@click="toFooddetails(item)">
						<image :src="'https://fuss10.elemecdn.com'+item.image_url" mode=""></image>
						<view>{{item.title}}</view>
					</view>


				</swiper-item>
				<swiper-item style="display: flex; flex-wrap: wrap;">
					<view class="wripper-food" v-for="item in foodClassifitontwo" :key="item.title"
						@click="toFooddetails(item)">
						<image :src="'https://fuss10.elemecdn.com'+item.image_url" mode=""></image>
						<view>{{item.title}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 附近商家 -->
		<view class="shop_list_container">
			<view class="shop_header">
				<image src="https://bpic.51yuansu.com/pic3/cover/02/20/71/59afc653291cb_610.jpg"></image>
				<view>附近商家</view>
			</view>
			<view class="shoplist_container">
				<view class="shop-item" v-for="item in nearbyMerchants" :key="item.id" @click="goShopping(item)">
					<image :src=" 'https://elm.cangdu.org/img/' +item.image_path"></image>
					<view class="shop-item-right">
						<view class="shop-right-line1">
							<view class="line1-left">
								<view>品牌</view>{{item.name}}
							</view>
							<view class="line1-right">
								保准票
							</view>
						</view>
						<view class="shop-right-line2">
							<view class="line2-left">
								<view class="line2-left-stars">
									<view>星星</view>
									<view>{{item.rating}}</view>
								</view>
								<view class="line2-left-list">
									月售{{item.recent_order_num}}单
								</view>
							</view>
							<view class="line2-right">
								<view>蜂鸟专送</view>
								<view>准时达</view>
							</view>
						</view>
						<view class="shop-right-line3">
							<view class="line3-left">
								<view>￥{{item.float_minimum_order_amount}}起送</view>
								<view>/</view>
								<view>{{item.piecewise_agent_fee.tips}}</view>
							</view>
							<view class="line3-right">
								<view>{{item.distance}}</view>
								<view>/</view>
								<view>{{item.order_lead_time}}</view>
							</view>
						</view>
					</view>
				</view>


			</view>
		</view>
		<view>
		</view>
	</view>

</template>

<script>
	import {
		$fetch_indexentry,
		$fetch_restaurants
	} from '../../apis/zm-port.js'
	export default {
		data() {
			return {
				foodClassifitonone: [], //初始话食品分类列表数据 1
				foodClassifitontwo: [], //初始话食品分类列表数据 2
				nearbyMerchants: []
			}
		},
		onLoad() {
			// 获取食品列表
			$fetch_indexentry().then(res => {
				this.foodClassifitonone = res.data.slice(0, 8)
				this.foodClassifitontwo = res.data.slice(8, 16)
				// console.log(res.data)
			})
			// 获取商铺列表   附近商家
			// 参数类型  query    latitude string 纬度 longitude string 经度
			// 1、在全局配置     2、获取经纬度 getLocation 
			// uni.getLocation({
			// 	type: 'wgs84',
			// 	success: function (res) {
			// 		console.log('当前位置的经度：' + res.longitude);
			// 		console.log('当前位置的纬度：' + res.latitude);
			// 	}
			// });
			$fetch_restaurants({
				latitude: '22',
				longitude: '11'
			}).then(res => {
				console.log(res.data[1].piecewise_agent_fee.tips)
				this.nearbyMerchants = res.data

			})
		},
		methods: {
			toFooddetails(v) {
				console.log(v)
				// uni.navigateTo({
				// 	url:'../fooddeails/fooddeails'
				// })
			},
			// 点击 附近商家 跳转到 商铺页面
			goShopping(v) {
				console.log(v)
				uni.navigateTo({
                    url:'/pages/pub/shop/shop?shop_id='+v.id
				})
				
			}

		}
	}
</script>

<style>
	.home-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #e3e6e8;
	}

	.home-box-top {
		width: 100%;
		height: 260px;
	}

	/* 搜索 */
	.home-top-serch {
		width: 100%;
		height: 35px;
		background-color: #1010e78f;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		position: fixed;
		z-index: 100;
		padding: 5px;
		box-sizing: border-box;
	}

	.search {
		width: 10%;
		text-align: center;
	}

	.adress {
		width: 65%;
		overflow: hidden;
		white-space: normal;
		text-overflow: ellipsis;
		text-align: center;
	}

	.login {
		width: 20%;
		text-align: center;
	}

	/* 轮播图 */
	.home-top-wripper {
		width: 100%;
		height: 100%;
		background-color: white;
		box-sizing: border-box;
		padding: 50px 5px 8px 5px;
	}


	.wripper-food {
		width: 25%;
		text-align: center;
		height: 86px;
	}

	.wripper-food>image {
		width: 46px;
		height: 46px;
		margin-bottom: 5px;
	}

	.wripper-food>view {
		font-size: 12px;
		color: gray;
	}

	/* 附近商家 */
	.shop_list_container {
		width: 100%;
		flex: 1;
		margin-top: 10px;
		background-color: white;
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.shop_header {
		width: 100%;
		height: 42px;
		display: flex;
		align-items: center;
	}

	.shop_header>image {
		width: 15px;
		height: 16px;
		margin-right: 5px;
	}

	.shop_header>view {
		height: 16px;
		color: gray;
		font-size: 13px;
	}

	.shoplist_container {
		width: 100%;
		flex: 1;
	}

	.shop-item {
		width: 100%;
		padding: 5px 0px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		margin: 12px 0px;
	}

	.shop-item>image {
		width: 18%;
		height: 78px;
	}

	.shop-item-right {
		width: 80%;
		display: flex;
		flex-direction: column;
	}

	.shop-right-line1 {
		width: 100%;
		height: 18px;
		display: flex;
		justify-content: space-between;
	}

	.line1-left {
		display: flex;
		font-size: 15px;
		font-weight: bold;
		align-items: center;
		line-height: 18px;

	}

	.line1-left>view {
		background: yellow;
		width: 32px;
		border-radius: 4px;
		font-size: 8px;
		text-align: center;
		line-height: 15px;
		margin-right: 5px;
		height: 15px;
	}

	.line1-right {
		font-size: 8px;
		color: gray;
		line-height: 18px;
	}

	.shop-right-line2 {
		width: 100%;
		height: 20px;
		display: flex;
		justify-content: space-between;
		margin: 10px 0px;
		font-size: 8px;
		align-items: center;
	}

	.line2-left,
	.line2-right {
		display: flex;
	}

	.line2-left-stars {
		display: flex;
		color: orange;
		margin-right: 5px;
	}

	.line2-left-stars>view:nth-child(1) {
		margin-right: 5px;
	}

	.line2-left-list {
		color: #a6a2a2;
	}

	.line2-right>view:nth-child(1) {
		background: #3f3ff6a1;
		border-radius: 3px;
		color: white;
		width: 50px;
		text-align: center;
		margin-right: 5px;
	}

	.line2-right>view:nth-child(2) {
		border-radius: 3px;
		color: #0000ffb8;
		width: 50px;
		text-align: center;
		margin-right: 5px;
		border: 1px solid #0000ffb8;
	}

	.shop-right-line3 {
		width: 100%;
		height: 18px;
		display: flex;
		justify-content: space-between;
		font-size: 8px;
		color: #757272;
		align-items: center;
	}

	.line3-left,
	.line3-right {
		display: flex;
	}

	.line3-right>view:nth-child(3) {
		color: #0000ffba;
	}
</style>
