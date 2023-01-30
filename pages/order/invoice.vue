<template>
	<view>
		<view class="pad">
			<u-radio-group v-model="value" width='100%'>
				<u-radio width='100%' active-color='#4cd964' name='online'> 不需要发票抬头</u-radio>
			</u-radio-group>
		</view>
		<button @click="sure">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: ''
			}
		},
		methods: {
			sure(){
				uni.navigateBack()
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
		box-sizing: border-box;
		display: flex;
		background-color: white;
		margin-top: 30rpx;
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