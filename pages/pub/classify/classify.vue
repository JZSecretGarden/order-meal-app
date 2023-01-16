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
				<view class="swiper-item commodity">
					<!-- 左菜单 -->
					<scroll-view class="left-menu" scroll-y="true">
						<!-- 菜单元素 -->
						<view class="left-menu-text" :class="{'left-menu-active':leftMenuIndex==index}"
							v-for="(item,index) in list" @tap="clickLeftMenu(index)">
							<view class="menu-dir" :class="{'active-menu-dir':leftMenuIndex==index}"></view>
							<text>{{item.name}}</text>
						</view>
					</scroll-view>
					<!-- 右商品列表 -->
					<scroll-view class="right-commodity" scroll-y="true">
						<!-- 商品分类卡片 -->
						<view class="commodity-card" v-for="item in list">
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
											<view v-if="commodity.specfoods.length==1" class="add-btn add-one">+</view>
											<view v-if="commodity.specfoods.length>1" class="add-btn add-more">选规格</view>
										</view>
									</div>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item evaluate">2</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		$commodity_list
	} from 'apis/jz-port.js'
	export default {
		data() {
			return {
				tabData: ['商品', '评价'],
				tabActiveIndex: 0, //选中tab下标
				list: [],
				leftMenuIndex: 0 //选中左菜单的下标
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
			}
		},
		onLoad() {
			$commodity_list().then((el) => {
				this.list = el.data
				console.log(this.list)
			})
		}
	}
</script>

<style scoped>
	@import url("classify.css");
</style>
