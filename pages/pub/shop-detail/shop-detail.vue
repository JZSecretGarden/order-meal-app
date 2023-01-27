<template>
	<view class="page">
		<!-- 活动与属性 -->
		<view class="wrap">
			<view class="title-row">活动与属性</view>
			<view class="content">
				<view class="supports" v-for="item in data.supports">
					<view class="sup-icon" :style="'background-color:#'+item.icon_color+';'">{{item.icon_name}}</view>
					<view class="sup-section">{{item.description}}</view>
				</view>
			</view>
		</view>
		<!-- 食品监督安全公示 -->
		<view class="wrap">
			<view class="title-row">食品监督安全公示</view>
			<view class="content">
				<view class="foodsale-item">
					<image class="sale-image" :src="'https://elm.cangdu.org/img/'+data.image_path" mode="aspectFill"></image>
					<view class="foodsale-section">
						<view class="foodsale-section-item"><text style="color: #999;">监督检查结果：</text><text style="color: #7ed321;">良好</text></view>
						<view class="foodsale-section-item"><text style="color: #999;">检查日期：</text></view>
					</view>
				</view>				
			</view>
		</view>
		<!-- 商家信息 -->
		<view class="wrap">
			<view class="title-row">商家信息</view>
			<view class="content">
				<view class="message-item"><text>效果演示</text></view>
				<view class="message-item"><text>地址：{{data.address}}</text></view>
				<view class="message-item"><text v-if="data.opening_hours!=undefined">营业时间：{{data.opening_hours[0]}}</text></view>
				<view class="message-item"><text>营业执照</text><u-icon name="arrow-right-double" size='20'></u-icon></view>
				<view class="message-item"><text>餐饮服务许可证</text><u-icon name="arrow-right-double" size='20'></u-icon></view>
			</view>
		</view>
	</view>
</template>

<script>
	import { $shop_detail } from '../../../apis/jz-port.js'
	export default {
		data() {
			return {
				data:{}	//商铺详情的数据容器
			}
		},
		methods: {
			
		},
		onLoad(e) {
			console.log(e)
			$shop_detail(e.id).then(val=>{
				this.data = val.data
								console.log(this.data)
			})
		}
	}
</script>

<style scoped>
	.page{
		background-color: #f4f4f4;
		min-height: 100vh;
		border-top: 1px solid #f4f4f4;
	}
	.wrap{
		margin-top: 20upx;
		background-color: #fff;
	}
	.title-row{
		font-size: 36upx;
		padding: 20upx 30upx;
		border-bottom: 1px solid #f4f4f4;
	}
	.content{
		padding-left: 30upx;
		border-bottom: 1px solid #fff;
	}
	.supports{
		display: flex;
		font-size: 14px;
		color: #787878;
		margin: 20upx 0;
	}
	.sup-icon{
		color: #fff;
		padding: 6upx;
		border-radius: 8upx;
	}
	.sup-section{
		margin-left: 20upx;
	}
	.foodsale-item{
		margin: 30upx 0;
		display: flex;
		align-items: center;
	}
	.sale-image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.foodsale-section{
		font-size: 14px;
		margin-left: 20upx;
	}
	.foodsale-section-item{
		margin: 20upx 0;
	}
	.message-item{
		border-bottom: 1px solid #f4f4f4;
		padding: 30upx 30upx 30upx 0;
		display: flex;
		justify-content: space-between;
		color: #787878;
	}
</style>
