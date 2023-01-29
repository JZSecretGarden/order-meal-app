<template>
	<view class="example">
		<view class="phone"><input class="phone-number" type="text" placeholder="账号" v-model="user.username" /></view>
		<view class="phone"><input class="phone-number" type="text" placeholder="旧密码" v-model="user.oldpassWord" /></view>
		<view class="phone"><input class="phone-number" type="text" placeholder="请输入新密码" v-model="user.newpassword" /></view>
		<view class="phone"><input class="phone-number" type="text" placeholder="请确认密码" v-model="user.confirmpassword" /></view>

		<view class="phone">
			<input class="phone-number" type="text" placeholder="验证码" v-model="user.captcha_code" />
			<view style="position: absolute;margin-left: 370upx;z-index: 99;" @click.native="renewImg()">
				<view style="display: flex;">
					<view style="flex-direction: row;"><image :src="codeImg" style="height: 80upx;width: 160upx;"></image></view>
					<view style="flex-direction: row;margin-left: 10upx;">
						<view>看不清</view>
						<view style="color: #3b95e9;" @click="renewImg()">换一张</view>
					</view>
				</view>
			</view>
		</view>

		<view style="margin-top: 20upx;" @click="updatePassword()">
			<button size="default" style="background-color: #4cd964;color: #ffffff;width: 600upx;">确认修改</button>
			<!-- <text style="line-height: 60rpx;color: #FFFFFF;">登录</text> -->
		</view>
	</view>
</template>

<script>
import { $fetch_v1_code, $fetch_v2_login } from '../../../apis/ryl-port.js';
export default {
	data() {
		return {
			mobile: '',
			duration: 0,
			interVal: null,
			codeImg: '',
			user: {
				username: '',
				oldpassWord: '',
				captcha_code: '',
				newpassword: '',
				confirmpassword:""
			}
		};
	},
	onLoad() {
		this.renewImg();
	},
	methods: {
		gotoResPassword() {
			uni.navigateTo({
				url: '../resPassword/resPassword'
			});
		},
		renewImg() {
			$fetch_v1_code().then(imgCodeRes => {
				// this.data = res.data
				console.log(JSON.stringify(imgCodeRes.data));
				this.codeImg = imgCodeRes.data.code;
			});
		},
		updatePassword() {
			if (this.user.username === '') {
				uni.showToast({ title: '账号不能为空', icon: 'none' });
				return;
			}
			if (this.user.oldpassWord === '') {
				uni.showToast({ title: '旧密码不能为空', icon: 'none' });
				return;
			}
			if (this.user.newpassword === '') {
				uni.showToast({ title: '新密码不能为空', icon: 'none' });
				return;
			}
			if (this.user.confirmpassword === '') {
				uni.showToast({ title: '新密码不能为空', icon: 'none' });
				return;
			}

			if (this.user.captcha_codes === '') {
				uni.showToast({ title: '验证码不能为空', icon: 'none' });
				return;
			}
			$fetch_v2_login(this.user).then(loginRes => {
				// this.data = res.data
				console.log(JSON.stringify(loginRes.data));
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
