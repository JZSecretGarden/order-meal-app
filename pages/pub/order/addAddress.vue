<template>
	<view>
		<view class="pad">
			<view class="column">
				<view class="left" style="line-height:100rpx">
					联系人
				</view>
				<view class="right">
					<view style="width: 100%;border-bottom: 1rpx solid #F5F5F5;"><u-input v-model="name" type="text" :border="border" placeholder='姓名' height='100'/></view>
					<view style="height: 100rpx;display: flex;align-items: center;">
						<u-radio-group v-model='sex' :wrap=border active-color='#4cd964' @change='radioChange' >
							<u-radio name='先生' @change='groupChange'> <text >先生</text></u-radio>
							<u-radio name='女士' @change='groupChange' > 女士</u-radio>
						</u-radio-group>
					</view>
				</view>
				
			</view>
			<view class="column">
				<view class="left" style="line-height:100rpx">
					联系电话
				</view>
				<view class="right" style="border-bottom: 1rpx solid #F5F5F5;">
					<view style="width: 100%;border-bottom: 1rpx solid #F5F5F5;"><u-input v-model="phone" type="text" :border="border" placeholder='你的手机号' height='100'/></view>
					<view >
						<u-input v-model="otherPhone" type="text" :border="border" placeholder='备选电话(选填)' height='100'/>
					</view>
				</view>
				
			</view>
			<view class="column">
				<view class="left" style="line-height:100rpx">
					送餐地址
				</view>
				<view class="right" style="border-bottom: 1rpx solid #F5F5F5;">
					<view style="width: 100%;border-bottom: 1rpx solid #F5F5F5;"><view style="height:100rpx;line-height: 100rpx; color:#c0c4cc;" @click="pathSearch">{{address}}</view></view>
					<view >
						<u-input v-model="detAddress" type="text" :border="border" placeholder='详细地址(如门牌号等)' height='100'/>
					</view>
				</view>
				
			</view>
			<view class="column">
				<view class="left" style="line-height:100rpx">
					标签
				</view>
				<view class="right" style="border-bottom: 1rpx solid #F5F5F5;">
					<view ><u-input v-model="mark" type="text" :border="border" placeholder='无/家/学校/公司' height='100'/></view>
				</view>
			</view>
		</view>
		<button @click="sure">确定</button>
	</view>
</template>

<script>
	import {$getCityList} from '../../../apis/zjl-port.js'
	import {$addressGetGoodAdd} from '../../../apis/zjl-port.js'
	export default {
		data() {
			return {
				name:'',
				border:false,
				sex:'先生',
				phone:'',
				otherPhone:'',
				address:'小区/写字楼/学校等',
				detAddress:'',
				mark:'',
				geohash:''

			}
		},
		methods: {
			onLoad() {
			
		},
		onShow(){
			let that=this
			uni.$once('update',function(e){
				console.log(e.msg);
				that.$data.address=e.msg.name
				that.$data.detAddress=e.msg.address
				that.$data.geohash=e.msg.geohash
			})
			
		},
		onUnload(){
			uni.$off('update')
		},
		groupChange(e){
			this.$data.sex=e
			console.log(e);
		},
		radioChange(){
			
		},
		sure(){
			let upSex = 0
			if(this.$data.sex=='先生'){
				upSex=1
			}else upSex=2
			let tag=0
			if(this.$data.mark=='无') tag=1
			if(this.$data.mark=='家') tag=2
			if(this.$data.mark=='学校') tag=3
			if(this.$data.mark=='公司') tag=4;
			let params={
				address:this.$data.address,
				address_detail:this.$data.detAddress,
				name:this.$data.name,
				phone:this.$data.phone,
				tag:this.$data.mark,
				sex:upSex,
				phone_bk:this.$data.otherPhone,
				tag_type:tag,
				geohash:this.$data.geohash
			}
			$addressGetGoodAdd(75382,params).then((res)=>{
				console.log(res);
				if(res.statusCode==200){
					uni.navigateBack()
				}
			})
		},
		pathSearch(){
			uni.navigateTo({
				url:'/pages/pub/order/searchAddress'
			})
		}
		},
	}
</script>

<style>
page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
		padding-bottom: 100rpx;
		font-size: 32rpx;
	}

	/* 每个部分相同的内边距等样式 */
	.pad {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;

		background-color: white;
	}
	.column{
		display: flex;
		width: 100%;
		border-bottom: 1rpx solid #F5F5F5;
	}
	.left{
		width: 30%;
	}
	.right{
		flex: 1;
	}
	..u-radio-group{
		width: 100%;
		display: flex;
		height: 100rpx;
	}
	button{
		background-color: #4CD964;
		border: none;
		width: 90%;
		margin: 30rpx auto;
		color: white;
	}
</style>