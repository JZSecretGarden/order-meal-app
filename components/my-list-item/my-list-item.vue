<template>
	<view>
		<view class="main-mid-item" @click="go(url)">
			<view class="img">
				<image :src="pic" mode=""></image>
			</view>
			<view class="content-item">
				<view class="title">
					{{txt}}
				</view>
				<view class="arrow">
					<image src="../../static/my/default-arrow.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['pic','txt','url'],
		name:"my-list-item",
		data() {
			return {
				
			};
			
		},
		methods: {
			go(url){
				uni.navigateTo({
					url:url,
					fail: function(res) {
					    // 通过eventChannel向被打开页面传送数据
						uni.switchTab({
							url:url
						})
					  }
				})
			}
		
		},
	}
</script>

<style scoped>
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