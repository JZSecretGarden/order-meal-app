<template>
	<view class="page">
		<!-- 顶部 -->
		<view class="top">
			<image class="user-img" src="../../../static/logo.png" mode="aspectFill"></image>
			<view class="user-msg">
				<view style='font-size: 18px;font-weight: bold;'>用户名称</view>
				<view class="">商家配送/分钟送达/配送费￥5</view>
				<view class="">公告：欢迎光临，用餐高峰请提前下单，谢谢</view>
			</view>
			<image class="go-icon" src="../../../static/pub/前进.png" mode=""></image>
		</view>
		<!-- tab切换 -->
		<view class="tab-row">
			<text v-for="(item,index) in tabData" :class="{'tab-item-active':tabActiveIndex==index}" class="tab-item"
				@click="selectTab(index)">{{item}}</text>
		</view>
		<!-- 页面切换 -->
		<swiper class="content-wrap" :current='tabActiveIndex' @change='changeCurrent'>
			<!-- 商品页面 -->
			<swiper-item>
				<!-- 内容 -->
				<view class="content">
					<view class="swiper-item commodity">
						<!-- 左菜单 -->
						<scroll-view class="left-menu" scroll-y="true" :scroll-with-animation='true' :scroll-top='leftMenuScroll'>
							<!-- 菜单元素 -->
							<view class="left-menu-text" :class="{'left-menu-active':leftMenuIndex==index}" v-for="(item,index) in list" @tap="clickLeftMenu(index)">
								<view class="menu-dir" :class="{'active-menu-dir':leftMenuIndex==index}"></view>
								<text>{{item.name}}</text>
							</view>
						</scroll-view>
						<!-- 右商品列表 -->
						<scroll-view class="right-commodity" scroll-y="true" :scroll-with-animation='true' :scroll-top='rightCommodityScroll' @scroll="scrollRight">
							<!-- 商品分类卡片 -->
							<view class="commodity-card" v-for="(item,index) in list" :key="index">
								<!-- 标题 -->
								<view class="title-row">
									<text class="title">{{item.name}}</text>
									<text class="description">{{item.description}}</text>
								</view>
								<view class="commodity-wrap">
									<!-- 商品元素 -->
									<view class="commodity-item" v-for="commodity in item.foods">
										<image class="commodity-image"
											:src="'https://elm.cangdu.org/img/'+commodity.image_path" mode="aspectFill">
										</image>
										<div class='commodity-msg'>
											<!-- 标题栏 -->
											<view class="commodity-title-row">
												<view class="title-box">{{commodity.name}}</view>
												<view class="tag-wrap">
													<view v-for='(tag,index) in commodity.attributes' :key="index">
														<text  class="tag" v-if="tag!=null" :style="{color:'#'+tag.icon_color,border:'1px solid #'+tag.icon_color}">{{tag.icon_name}}</text> 
													</view>
												</view>
											</view>
											<!-- 描述栏 -->
											<view class="commodity-description msg-row">
												{{commodity.description}}
											</view>
											<!-- 售卖信息栏 -->
											<view class="commodity-tips msg-row">
												{{commodity.tips}}
											</view>
											<!-- 活动栏 -->
											<view class="active-wrap">
												<text  class="active msg-row" v-if="commodity.activity != null" :style="{color:'#'+commodity.activity.image_text_color,border:'1px solid #'+commodity.activity.icon_color}">{{commodity.activity.image_text}}</text> 
											</view>
											<!-- 价格栏 -->
											<view class="price-row">
												<view class="price-text">
													￥{{commodity.specfoods[0].price}}
												</view>
												<view class="btn-box">
													<view v-show="commodityNum(commodity)>0" class="minus-btn">-</view>
													<view v-show="commodityNum(commodity)>0" class="btn-box-num">{{commodityNum(commodity)}}</view>
													<view v-if="commodity.specfoods.length==1" class="add-btn add-one" @click="addOne(commodity)">+</view>
													<view v-if="commodity.specfoods.length>1" class="add-btn add-more" @click="addMore(commodity)">选规格</view>
												</view>
											</view>
										</div>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>			
			</swiper-item>
			<swiper-item>
				<view class="swiper-item evaluate">2</view>
			</swiper-item>
		</swiper>
		<!-- 底部购物车 -->
		<view class="floor-car">
			<view class="floor-img">
				<text class="count-num" >1</text>
				<image  src="../../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="price-box">
				<view style="font-size: 20px;font-weight: bold;">¥20.00</view>
				<view>配送费¥5</view>
			</view>
			<view class="over-btn">去结算</view >
		</view>
		<!-- 购物车弹窗 -->
		<view v-show="carPopShow" class="car-pop pop">
			<view class="car-wrap">
				<view class="car-title">
					<view style="font-size: 36upx;">购物车</view>
					<view class="">清空</view>
				</view>
				<!-- 购物车内容 -->
				<view class="car-cont">
					<view class="car-item-row">
						<view class="car-item-title-box">
							<view class="car-item-title">ee</view>
							<view class="car-item-des">123</view>
						</view>
						<view class="car-item-price">￥20</view>
						<view class="btn-box">
							<view  class="minus-btn">-</view>
							<view  class="btn-box-num">1</view>
							<view  class="add-btn add-one">+</view>
						</view>
					</view>
				</view>
			</view>	
		</view>
		<!-- 多规格弹窗 -->
		<view v-show="morePopShow" class="more-pop pop">
			<view class="more-wrap">
				<view class="close-pop" @click="closeMorePop" >关闭</view>
				<view class="more-title">标题</view>
				<view style="color: #666;font-size: 14px;">规格</view>
				<view class="more-content">
					<view class="more-item" :class="{'more-item-active':moreActiveIndex==index}" v-for="(item,index) in moreCommodityData" @click="selectMore(index)">{{item.name}}</view>
				</view>
				<view class="more-price-row">
					<view class="" v-if="moreCommodityData.length!=0" >￥{{moreCommodityData[moreActiveIndex].price}}</view>
					<view class="add-btn more-pop-btn" @click="addMoreToCar">加入购物车</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import {$commodity_list} from 'apis/jz-port.js'
import { nextTick } from "vue"
	export default {
		data() {
			return {
				tabData: ['商品', '评价'],
				tabActiveIndex: 0, //选中tab下标
				list: [],
				leftMenuIndex: 0 ,//选中左菜单的下标
				cardTop:[] ,//商品卡片距离顶部的距离
				menuTop:[] ,//菜单距离顶部的距离
				leftMenuScroll:0,
				rightCommodityScroll:0,
				morePopShow:false,
				moreCommodityData:[] ,//多个商品的数据存放进容器中
				moreActiveIndex:0, //选中多规格的下标
				carData:[],
				carPopShow:false	//控制购物车弹窗显示
			}
		},
		computed:{
			//计算每个商品的选择数量
			commodityNum(){
				return function(com){
					let num = 0
					com.specfoods.forEach(el=> num = num + el.num)
					return num
				}
			}
		},
		methods: {
			selectTab(index) { //选中tab栏下标
				this.tabActiveIndex = index
			},
			changeCurrent(e) { //滑动页面改变选中
				this.tabActiveIndex = e.detail.current
			},
			clickLeftMenu(index) { //点击左侧菜单元素
				this.leftMenuIndex = index
				this.leftMenuScroll = this.menuTop[index]
				this.rightCommodityScroll = this.cardTop[index]
			},
			getCommodityPosition(){	//获取商品卡片位置信息与菜单位置信息
				uni.createSelectorQuery().in(this).selectAll('.commodity-card').boundingClientRect(data=>{
					data.forEach(el=>{
						this.cardTop.push(el.top-143)
					})
				}).selectAll('.left-menu-text').boundingClientRect(data=>{
					data.forEach(el=>{
						this.menuTop.push(el.top-143)
					})
				}).exec()
			},
			scrollRight(el){	//滚动右侧商品列表
				for(let i=0; i<this.cardTop.length; i++){
					if(el.detail.scrollTop>=this.cardTop[i]&&el.detail.scrollTop<this.cardTop[i+1]){
						this.leftMenuScroll=this.menuTop[i] 
						this.leftMenuIndex=i;
					} 
				}
			},
			addOne(data){	//增加单个商品数量
				let selectCom = data.specfoods[0]
				if(this.carData.includes(selectCom)){
					selectCom.num++
				}else{
					selectCom.num=1
					this.carData.push(selectCom)		
				}
				console.log(this.carData)
			},
			addMore(data){	//将多个商品的数据存放进容器中
				this.moreCommodityData = data.specfoods
				this.morePopShow = true
				console.log(this.moreCommodityData)
			},
			addMoreToCar(){	//将选中的多规格商品加入购物车
				let selectCom = this.moreCommodityData[this.moreActiveIndex]
				if(this.carData.includes(selectCom)){
					selectCom.num++
				}else{
					selectCom.num=1
					this.carData.push(selectCom)		
				}
				this.closeMorePop()	//关闭多规格弹窗
			},
			closeMorePop(){	//关闭多规格弹窗
				this.morePopShow = false
				this.moreCommodityData = []
			},
			selectMore(index){	//选中多规格商品
				this.moreActiveIndex = index
				console.log(this.moreActiveIndex)
				console.log(this.moreCommodityData)
			}
		},
		onLoad() {
			//请求商品数据
			$commodity_list({restaurant_id:1}).then((el) => {
				el.data.forEach(item=>{
					item.foods.forEach(food=>food.specfoods.forEach(specfood=>specfood.num=0))
				})
				this.list = el.data
				console.log(this.list)
				this.$nextTick(function(){
					this.getCommodityPosition() //获取页面节点信息
				})
			})
		},
		onReady() {
		
		}
	}
</script>

<style scoped>
	@import url("classify.css");
</style>
