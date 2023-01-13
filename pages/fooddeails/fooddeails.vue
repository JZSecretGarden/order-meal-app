<template>
	<view class="food_container">
		<view class="food-goback">
			<view>
				< </view>
					<view>甜品</view>
			</view>
			<view class="food-sort_container">
				af
			</view>
			<view class="food_list_container">
				<view class="shop-item">
					<image src="../../static/logo.png"></image>
					<view class="shop-item-right">
						<view class="shop-right-line1">
							<view class="line1-left">
								<view>品牌</view>效果演示
							</view>
							<view class="line1-right">
								保准票
							</view>
						</view>
						<view class="shop-right-line2">
							<view class="line2-left">
								<view class="line2-left-stars">
									<view>星星</view>
									<view>4.7</view>
								</view>
								<view class="line2-left-list">
									月售106单
								</view>
							</view>
							<view class="line2-right">
								<view>蜂鸟专送</view>
								<view>准时达</view>
							</view>
						</view>
						<view class="shop-right-line3">
							<view class="line3-left">
								<view>￥20起送</view>
								<view>/</view>
								<view>配送费约￥5</view>
							</view>
							<view class="line3-right">
								<view>1542.3公里</view>
								<view>/</view>
								<view>16小时49分钟</view>
							</view>
						</view>
					</view>
				</view>
			    <view class="shop-item">
			    		<image src="../../static/logo.png"></image>
			    		<view class="shop-item-right">
			    			<view class="shop-right-line1">
			    				<view class="line1-left">
			    					<view>品牌</view>效果演示
			    				</view>
			    				<view class="line1-right">
			    					保准票
			    				</view>
			    			</view>
			    			<view class="shop-right-line2">
			    				<view class="line2-left">
			    					<view class="line2-left-stars">
			    						<view>星星</view>
			    						<view>4.7</view>
			    					</view>
			    					<view class="line2-left-list">
			    						月售106单
			    					</view>
			    				</view>
			    				<view class="line2-right">
			    					<view>蜂鸟专送</view>
			    					<view>准时达</view>
			    				</view>
			    			</view>
			    			<view class="shop-right-line3">
			    				<view class="line3-left">
			    					<view>￥20起送</view>
			    					<view>/</view>
			    					<view>配送费约￥5</view>
			    				</view>
			    				<view class="line3-right">
			    					<view>1542.3公里</view>
			    					<view>/</view>
			    					<view>16小时49分钟</view>
			    				</view>
			    			</view>
			    		</view>
			    	</view>
			    
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.food_container {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	/* 返回 */
	.food-goback {
		width: 100%;
		height: 45px;
		background-color: blue;
		display: flex;
		align-items: center;
		font-size: 20px;
		color: white;
		font-weight: bold;
		justify-content: space-between;
		padding: 0px 10px;
		box-sizing: border-box;
	}

	.food-goback>view:nth-child(2) {
		width: 95%;
		text-align: center;
	}

	/* 排序容器 */
	.food-sort_container {
		width: 100%;
		height: 42px;
	}

	/* 商品列表 */
	.food_list_container {
		width: 100%;
		flex: 1;
		padding: 10px 5px;
		box-sizing: border-box;
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
