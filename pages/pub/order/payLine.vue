<template>
	<view>
		<view class="pad">
			<view class="h4">支付剩余时间</view>
			<p>00:{{min}}:{{second}}</p>
		</view>
		<view class="way">
			选择支付方式
		</view>
		<view class="check pad">
			<u-radio-group v-model="value" width='100%' size='50' icon-size='40'>
			<u-radio width='100%' active-color='#4cd964' style='border-bottom:2rpx solid #dcdcdc;'><view style="display: flex;align-items: center;"><view class="img"></view><view style="font-size: 40rpx;">支付宝支付</view></view></u-radio>
			<u-radio width='100%' active-color='#4cd964' name='online'><view style="display: flex;align-items: center;"><view class="img2"></view><view style="font-size: 40rpx;"> 微信支付</view></view></u-radio>
		</u-radio-group>
		</view>
		<button @click="sure">确定</button>
		<u-modal v-model="show" :content="content"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				min: 15,
				second: '00',
                interval:'',
				value:'online',
				show:false,
				content:'当前环境无法支付，请打开官方APP进行付款'
			}
		},
		methods: {
			onLoad() {
				let time = (+new Date()) + 15 * 60 * 1000;
				let that = this
				function fun() {
					let date = time - (+new Date())
					//分数小于10
					if (Math.floor(date / 1000 / 60 % 60) < 10) {
						that.$data.min = '0' + Math.floor(date / 1000 / 60 % 60)
					} else {
						that.$data.min = Math.floor(date / 1000 / 60 % 60)
					}
					//秒数小于10
					if (Math.floor(date / 1000 % 60) < 10) {
						that.$data.second = '0' + Math.floor(date / 1000 % 60)
					} else {
						that.$data.second = Math.floor(date / 1000 % 60)
					}
					if(Math.floor(date / 1000 / 60 % 60)==0&&Math.floor(date / 1000 % 60)==0){
						clearInterval(that.interval)
					}
					return fun
				}
				
				this.interval=setInterval(fun(), 1000)
			},
			sure(){
				this.$data.show=true
				console.log(111);
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}

	/* 每个部分相同的内边距等样式 */
	.pad {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: white;
	}

	.h4 {
		text-align: center;
		font-size: 30rpx;
		margin-top: 40rpx;
	}

	p {
		font-size:70rpx ;
		text-align: center;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
	}
	.way{
		padding: 30rpx;
		font-size: 30rpx;
	}
	.u-radio{
		display: flex;
		flex-direction:row-reverse;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
	}
	.u-radio-group{
		width: 100%;
	}
	.img{
		width: 96rpx;
		height: 96rpx;
		background-size: 100%;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAIAAABsNpe/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMjgzMDhGREVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMjgzMDhGRUVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyODMwOEZCRUVBQjExRTY5QThCODJFRjAwODFBNzhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyODMwOEZDRUVBQjExRTY5QThCODJFRjAwODFBNzhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i3VM1AAACXJJREFU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);
		margin-right: 10rpx;
	}
	.img2{
		width: 96rpx;
		height: 96rpx;
		background-size: 100%;
		margin-right: 10rpx;
		background-image: url(https://img1.baidu.com/it/u=1616447740,2353901875&fm=253&fmt=auto&app=138&f=JPEG?w=328&h=329);
		border-radius: 50%;
	}
	button{
		background-color: #4CD964;
		border: none;
		width: 90%;
		margin: 30rpx auto;
		color: white;
	}
</style>