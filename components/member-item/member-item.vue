<template>
	<view>
		<view class="container">
			<view class="main">
				<view class="img">
					<image :src="img" mode=""></image>
				</view>
				<view class="main-r">
					<view class="title">
						{{title}}
					</view>
					<view class="info">
						{{info}}
					</view>
					<view class="express">
						{{express}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"member-item",
		props:['img','title','info','express'],
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.container{
		background-color: #fff;
		padding-left: 40upx;
		
	}
	.main{
		display: flex;
		padding-bottom:40upx;
		padding-top:40upx;
		border-bottom: 1px solid #ddd;
	}
	.img{
		margin-right: 30upx;
	}
	image{ 
		width: 80upx;
		height: 90upx;
	}
	.title{
		font-size:40upx;
	}
	.info{
		font-size: 20upx;
		color:#aaa;
		padding-top: 5upx;
		padding-bottom: 5upx;
	}
	.express{
		font-size: 20upx;
		color:#aaa;
	}
</style>