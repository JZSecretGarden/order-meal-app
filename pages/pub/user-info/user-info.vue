<template>
	<view class="user-info">
		<view class="item" style="margin-top: 30upx;border-top: 1px solid #f1f1f1;background-color: #fff;position: relative;padding: 20upx 0;">
			<ServeItem title='头像'></ServeItem>
			<image @click="upImg" style="width: 84upx;height:84upx;border-radius: 84upx; position: absolute;top:36upx;right:80upx;" :src="avatar" mode=""></image>
		</view>
		<view class="item" style="position: relative;">
			<ServeItem title='用户名'></ServeItem>
			<view class="" style="position: absolute; top:35upx; right: 80upx;color: #aaa;">
				{{user_name}}
				
			</view>
		</view>
		<view class="item" @click="toAddress()">
			<ServeItem title='收货地址'></ServeItem>
		</view>
		<view class="tip">
			账号绑定
		</view>
		<MyListItem  pic='../../../static/my/手机.png' txt="手机"></MyListItem>
		<view class="tip">
			安全设置
		</view>
		<ServeItem title='登录密码'></ServeItem>
		<view class="btn" @click="removeLogin">
			<button style="background-color: #D8584A; color: #fff;">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {$fetch_v2_signout} from '../../../apis/tf-port.js'
	import MyListItem from '../../../components/my-list-item/my-list-item.vue'
	import ServeItem from "../../../components/serve-item/serve-item.vue"
	export default {
		components:{ ServeItem,MyListItem },
		data() {
			return {
				user_name:'',
				avatar:''
			}
		},
		onLoad(option) {
			this.avatar = option.avatar
		},
		methods: {
			upImg(){
				uni.chooseImage({
					count: 1, 
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			toAddress(){
				uni.navigateTo({
					url:''
				})
			},
			removeLogin(){
				$fetch_v2_signout().then(res=>{
					console.log(res)
					uni.showToast({
						title:res.data.message
					})
				})
			}
		}
	}
</script>

<style scoped>
	.user-info{
		height: 100vh;
		background-color: #F2F2F2;
	}
	.item{
		border-bottom: 1px solid #f1f1f1;
	}
	.tip{
		padding: 20upx;
	}
	.btn{
		padding: 80upx 20upx;
	}
</style>
