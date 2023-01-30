<template>
	<view class="example">
		<view class="phone">
			<!-- <text class="span-des">账号：</text> -->
			<input class="phone-number" type="text" placeholder="账号" v-model="user.username" />
		</view>
		<view class="phone">
			<!-- <text class="span-des">密码：</text> -->
			<input class="phone-number" type="text" placeholder="密码" v-model="user.password"/>
		</view>
		<view class="phone">
			<!-- <text class="span-des">验证码：</text> -->
			<input class="phone-number" type="text" placeholder="验证码" v-model="user.captcha_code"/>
			<view style="position: absolute;margin-left: 370upx;z-index: 99;"  @click.native="renewImg()">
				<view style="display: flex;">
					<view style="flex-direction: row;"><image :src="codeImg" style="height: 80upx;width: 160upx;"></image></view>
					<view style="flex-direction: row;margin-left: 10upx;">
						<view>看不清</view>
						<view style="color: #3b95e9;" @click="renewImg()">换一张</view>
					</view>
				</view>
			</view>
		</view>
		<view style="font-size: 26upx;color: red;margin-top: 20upx;">温馨提示：未注册过的账号，登录时将自动注册</view>
		<view style="font-size: 26upx;color: red;margin-top: 20upx;"> 注册过的用户可凭账号密码登录</view>
		<view style="margin-top: 20upx;" @click="login">
			<button size="default" style="background-color: #4cd964;color: #ffffff;width: 600upx;">登录</button>
			<!-- <text style="line-height: 60rpx;color: #FFFFFF;">登录</text> -->
		</view>
		<view style="display: flex;width: 100%;height: 80upx;font-size: 30upx;">
			<view style="flex-direction: row;width: 50%;margin-left: 20upx;margin-top: 20upx;color: #d5ebff;"></view>
			<view style="flex-direction: row;width: 50%;margin-left: 430upx;margin-top: 20upx;color: #3b95e9;" @click="gotoResPassword()">重置密码</view>
		</view>
	</view>
</template>

<script>
import { $fetch_v1_code,$fetch_v2_login } from '../../../apis/ryl-port.js';
export default {
	data() {
		return {
			mobile: '',
			duration: 0,
			interVal: null,
			codeImg:"",
			user:{
				username:"",
				password:"",
				captcha_code:null
			}
		};
	},
	onLoad() {
		this.renewImg();
	},
	methods: {
		gotoResPassword(){
			uni.navigateTo({
				url:'../resPassword/resPassword'
			})
		},
		renewImg(){
			$fetch_v1_code().then(imgCodeRes => {
				// this.data = res.data
				console.log(JSON.stringify(imgCodeRes.data))
				this.codeImg = imgCodeRes.data.code;
			});
		},
		login(){
			if(this.user.username===""){
				uni.showToast({ title: "账号不能为空", icon: 'none' });
				return;
			}
			if(this.user.password===""){
				uni.showToast({ title: "密码不能为空", icon: 'none' });
				return;
			}
			if(this.user.captcha_code===""){
				uni.showToast({ title: "验证码不能为空", icon: 'none' });
				return;
			}
			$fetch_v2_login(this.user).then(loginRes => {
				// this.data = res.data
				console.log(JSON.stringify(loginRes.data))
				// this.codeImg = imgCodeRes.data.code;
				uni.showToast({ title: loginRes.data.message, icon: 'none' });
			});
			
			
		},
		// 调用短信发送接口
		async sms_send() {
			if (this.duration) {
				uni.showToast({
					title: `请在${this.duration}秒后重试`,
					icon: 'none'
				});
				return;
			}
			if (!/^1\d{10}$/.test(this.mobile)) {
				uni.showToast({
					title: '手机号码填写错误',
					icon: 'none'
				});
				return;
			}
			uni.showLoading({
				title: '请稍等...',
				mask: true
			});
			try {
				let res = await uniCloud.callFunction({
					name: 'sms_send',
					data: {
						mobile: this.mobile
					}
				});
				uni.hideLoading();
				if (res.result.code != 0) {
					return uni.showToast({
						icon: 'none',
						title: '验证码发送失败'
					});
				}
				uni.showToast({
					title: '验证码发送成功，请注意查收',
					icon: 'none'
				});
				this.duration = 60;
				this.interVal = setInterval(() => {
					this.duration--;
					if (this.duration === 0) {
						if (this.interVal) {
							clearInterval(this.interVal);
							this.interVal = null;
						}
					}
				}, 1000);
			} catch (err) {
				uni.hideLoading();
				uni.showToast({
					icon: 'none',
					title: '验证码发送失败'
				});
			}
		}
	}
};
</script>

<style lang="scss">
page{
background-color:#f5f5f5;
}
.example {
	// padding: 30rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	height: 100%;

	.phone {
		display: flex;
		background-color: #f5f5f5;
		padding: 30rpx;
		align-items: center;
		justify-content: center;
		border-bottom: 6upx solid #f1f1f1;
		
		.span-des {
			font-size: 28rpx;
			font-weight: bold;
			color: #333333;
			width: 150upx;
		}

		.phone-number {
			width: 650rpx;
			height: 45rpx;
			color: #333333;
		}
	}

	.send-sms {
		text-align: center;
		margin-top: 30rpx;
		height: 60rpx;
		width: 200rpx;
		background-color: #007aff;
		border-radius: 50rpx;
	}
}
</style>