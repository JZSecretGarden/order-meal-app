<template>
	<view>
		<view class="pad">
			<u-checkbox shape="circle" 	v-model="needInvoice" 	@change="checkboxChange" name="need">需要发票抬头</u-checkbox>
		</view>
		<button @click="sure">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: '',
				needInvoice:false
			}
		},
		methods: {
			sure(){
				uni.navigateBack()
			},
			checkboxChange(e){
				console.log(e)
			}
		},
		onLoad(options){
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.emit('needInvocie',this.needInvoice);
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
		box-sizing: border-box;
		display: flex;
		background-color: white;
		margin-top: 30rpx;
		padding-left: 40upx;
	}
	.u-radio-group{
		width: 100%;
	}
	.u-radio{
		display: flex;
		flex-direction:row-reverse;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		font-size: 40rpx;
	}
	.u-radio-group{
		font-size: 36rpx;
	}
	button{
		background-color: #4CD964;
		border: none;
		width: 90%;
		margin: 30rpx auto;
		color: white;
	}
</style>