<template>
	<view style="height: 100%;display: flex;flex-direction: column">
		<view class="pad">
			<view style="flex: 1;">
				<u-input v-model="search" type="text" :border="border" placeholder='请输入小区/写字楼/学校等' height='80' />
			</view>
			<button @click="getList">搜索</button>
		</view>
		<view class="tip" v-if="list==''">
			<p>找不到地址?</p>
			<p>尝试输入小区、写字楼或学校名</p>
			<p>详细地址(如门牌号等)可稍后输入哦</p>
		</view>
		<view class="list" v-if="list!=''">
			<view class="each" v-for="(item,index) in list" :key="index" @click="searchBack(index)">
				<view class="name">{{item.name}}</view>
				<text>{{item.address}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import{$searchAddress,$getCityList} from "../../../apis/zjl-port.js"
	export default {
		data() {
			return {
				search: '',
				border: false,
				list: '',
				city_id:'',
			}
		},
		methods: {
			onLoad(){
				console.log(1111);
				$getCityList({type:'guess'}).then((res)=>{
					console.log(res.data);
					this.$data.city_id=res.data.id
				})
			},
			getList(){
				let params={
					city_id:this.$data.city_id,
					keyword:this.$data.search
				}
				$searchAddress(params).then((res)=>{
					console.log(res.data);
					this.$data.list=res.data
				})
			},
			searchBack(i){
				uni.$emit('update' ,{msg:this.$data.list[i]})
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		font-size: 32rpx;
	}

	/* 每个部分相同的内边距等样式 */
	.pad {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		background-color: white;

	}

	.u-input {
		background-color: #F5F5F5;
		flex: 1;
	}

	button {
		margin-left: 30rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		width: 160rpx;
		background-color: #3190E8;
		color: white;
	}

	.tip {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		flex-direction: column
	}
	p{
		color: #aaa;
		font-size: 25rpx;
	}
	.each{
		padding: 30rpx;
		border-bottom: 2rpx solid #f5f5f5;
	}
	.name{
		white-space:pre-wrap
	}
	text{
		font-size: 30rpx;
		color: #999999;
	}
</style>