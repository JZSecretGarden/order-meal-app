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
													<view v-if="commodity.specfoods.length==1" v-show="commodityNum(commodity)>0" class="minus-btn" @click="minusOne(commodity)">-</view>
													<view v-if="commodity.specfoods.length>1" v-show="commodityNum(commodity)>0" class="minus-btn" @click="minusMore(commodity)">-</view>
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
			<!-- 评论页面 -->
			<swiper-item>
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="evaluateScrollToLower">
					<view class="swiper-item evaluate">
						<!-- 评价总分模块 -->
						<view class="evaluate-grade">
							<view class="garde-left">
								<view class="garde-num">4.7</view>
								<view class="">综合评价</view>
								<view class="garde-hint">高于周边商家76.9%</view>
							</view>
							<view class="garde-right">
								<view class="garde-right-row">
									<text class="garde-row-item garde-row-title">服务态度</text>
									<view class="star-box">
										<text class="garde-row-item" style="font-size: 24upx;">⭐</text>
										<text class="garde-row-item" style="font-size: 24upx;">⭐</text> 
										<text class="garde-row-item" style="font-size: 24upx;">⭐</text> 
									</view>								
									<text class="garde-row-item" style="font-size: 28upx;color: #f60;">4.7</text>
								</view>
								<view class="garde-right-row">
									<text class="garde-row-item garde-row-title">菜品评价</text>
									<view class="star-box">
										<text class="garde-row-item" style="font-size: 24upx;">⭐</text>
										<text class="garde-row-item" style="font-size: 24upx;">⭐</text> 
										<text class="garde-row-item" style="font-size: 24upx;">⭐</text> 
									</view>								
									<text class="garde-row-item" style="font-size: 28upx;color: #f60;">4.7</text>
								</view>
								<view class="garde-right-row">
									<text class="garde-row-item garde-row-title">送达时间</text>				
									<text class="garde-row-item" style="font-size: 24upx;color: #666;">分钟</text>
								</view>
							</view>
						</view>
						<!-- 评价内容模块-->
						<view class="evaluate-content">
							<!-- 评价分类 -->
							<view class="evaluate-class">
								<view class="evaluate-item" :class="{'active-evaluate':evaluateActive==index,'disable-evalute':index==2}" v-for="(item,index) in evaluateClass" @click="selectEvaluate(index)">{{item.name}}({{item.count}})</view>
							</view>
							<!-- 评价文章 -->
							<view class="evaluate-article">
								<!-- 单个文章板块 -->
								<view class="evaluate-article-item" v-for="item in evaluateContent">
									<!-- 头像包 -->
									<view class="evaluate-image-box">
										<image :src="'https://elm.cangdu.org/'+item.avatar+'.jpeg'" mode="aspectFill"></image>
									</view>
									<!-- 内容包 -->
									<view class="content-box">
										<view class="name-time-row">
											<text>{{item.username}}</text>
											<text style="color: #999;">{{item.rated_at}}</text>
										</view>
										<view class="evaluate-star-row">
											<text v-for="cont in item.rating_star">⭐</text>
											<text style="margin-left: 10upx;">{{item.time_spent_desc}}</text>
										</view>
										<view class="commodity-image-row">
											<image v-for="commodity in item.item_ratings" :src="commodity.image_hash" mode="aspectFill"></image>
										</view>
										<view class="evaluate-tag-row">
											<text class="evaluate-tag-item">超级炸炸炸</text>
											<text class="evaluate-tag-item">韩式涮涮涮</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 底部购物车 -->
		<view class="floor-car" v-show="tabActiveIndex==0">
			<view class="floor-img" @click="openCarPop">
				<text class="count-num" v-show="carCount>0" >{{carCount}}</text>
				<image  src="../../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="price-box">
				<view style="font-size: 20px;font-weight: bold;">¥{{totalCarPrice}}</view>
				<view>配送费¥5</view>
			</view>
			<view class="over-btn" @click="goToBuy">去结算</view >
		</view>
		<!-- 购物车弹窗 -->
		<view v-show="carPopShow" class="car-pop pop" @click="closeCarPop">
			<view class="car-wrap" @click.stop=''>
				<view class="car-title">
					<view style="font-size: 36upx;">购物车</view>
					<view class="" @click="clearCarData">清空</view>
				</view>
				<!-- 购物车内容 -->
				<view class="car-cont">
					<view class="car-item-row" v-for="(item,index) in carData" :key="item._id">
						<view class="car-item-title-box">
							<view class="car-item-title">{{item.name}}</view>
							<view class="car-item-des">{{item.specs_name}}</view>
						</view>
						<view class="car-item-price">￥{{item.price}}</view>
						<view class="btn-box">
							<view  class="minus-btn" @click="minusCarData(item,index)">-</view>
							<view  class="btn-box-num">{{item.num}}</view>
							<view  class="add-btn add-one" @click="addCarData(item,index)">+</view>
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
	import { $commodity_list , $comment_class, $comment_content } from 'apis/jz-port.js'
	import { nextTick } from "vue"
	export default {
		data() {
			return {
				shopId:1,	//商铺id
				tabData: ['商品', '评价'],
				tabActiveIndex:1, //选中tab下标
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
				carPopShow:false,	//控制购物车弹窗显示
				evaluateClass:[],	//购物车分类容器
				evaluateActive:0,	//选中评价的下标
				evaluateContent:[],	//评价容器
				evaluateContentNum:10, //每次评价内容请求10条
				evaluateScrollToLowerNum:0, //评价内容滚动底部次数
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
			},
			// 购物车计件总数
			carCount(){
				let num = 0;
				this.carData.forEach(el=>num = num + el.num)
				return num
			},
			// 购物车总价
			totalCarPrice(){
				let totalPrice = 0
				this.carData.forEach(el=>totalPrice += el.price)
				return totalPrice
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
				selectCom.num++
				if(!this.carData.includes(selectCom)) this.carData.push(selectCom)
			},
			minusOne(data){	//减少单个商品数量
				let selectCom = data.specfoods[0]
				selectCom.num--
				if(selectCom.num==0) this.carData.splice(this.carData.indexOf(selectCom),1)
			},
			addMore(data){	//将多个商品的数据存放进容器中
				this.moreCommodityData = data.specfoods
				this.morePopShow = true
				console.log(this.moreCommodityData)
			},
			minusMore(){	//减少多规格商品
				uni.showToast({
					title:'请在购物车界面删除多规格商品'
				})
			},
			addMoreToCar(){	//将选中的多规格商品加入购物车
				let selectCom = this.moreCommodityData[this.moreActiveIndex]
				selectCom.num++
				if(!this.carData.includes(selectCom)) this.carData.push(selectCom)		
				this.closeMorePop()	//关闭多规格弹窗
			},
			closeMorePop(){	//关闭多规格弹窗
				this.morePopShow = false
				this.moreCommodityData = []
			},
			selectMore(index){	//选中多规格商品
				this.moreActiveIndex = index	
			},
			openCarPop(){		//打开购物车弹窗
				this.carPopShow = true
				console.log(this.carData)
			},
			closeCarPop(){	//关闭购物车弹窗
				this.carPopShow = false
			},
			minusCarData(data,index){	//购物车内减少商品
				console.log(data,index)
				data.num--
				if(data.num<=0) this.carData.splice(index,1)
			},
			addCarData(data,index){	//购物车内增加商品
				data.num++
			},
			goToBuy(){	//去结算
				this.carData.length == 0? uni.showToast({title:'请选择商品'}) : console.log(this.carData,'去结算')
			},
			clearCarData(){	//清空购物车
				this.carData.forEach(el=>el.num=0)
				this.carData = []
			},
			reqEvaluateContent(){		//请求评价信息
				let data = { restaurant_id:this.shopId, tag_name:this.evaluateClass[this.evaluateActive].name, offset:this.evaluateScrollToLowerNum*this.evaluateContentNum, limit:this.evaluateContentNum }
				$comment_content(this.shopId,data).then((el)=>{
					this.evaluateContent = this.evaluateContent.concat(el.data) 
					console.log(this.evaluateContent)
				})
			},
			selectEvaluate(index){	//选择评价分类
				this.evaluateActive = index
				this.evaluateContent = [] //初始化容器
				this.reqEvaluateContent() //请求评价信息
			},
			evaluateScrollToLower(){	//评价滚动到底部
				this.evaluateScrollToLowerNum++
				this.reqEvaluateContent()
			}
		
		},
		onLoad() {
			//请求商品数据
			$commodity_list({restaurant_id:this.shopId}).then((el) => {
				el.data.forEach(item=>{
					item.foods.forEach(food=>food.specfoods.forEach(specfood=>specfood.num=0))
				})
				this.list = el.data
				this.$nextTick(function(){
					this.getCommodityPosition() //获取页面节点信息
				})
			})
			//请求评论分类
			$comment_class(this.shopId).then((el)=>{
				this.evaluateClass = el.data
				console.log(this.evaluateClass,this.evaluateClass[this.evaluateActive].name)
				this.reqEvaluateContent()		//请求评价信息
			})

			
		},
		onReady() {
		
		}
	}
</script>

<style scoped>
	@import url("shop.css");	
	/* 已改 */
</style>
