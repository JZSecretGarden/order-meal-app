<template>
	<view class="example">
		<view style="float: right;margin-left: 500upx;color: #3190e8;" @click="cutCity()">切换城市</view>
		<view class="phone" style="margin-top: 20upx;">
			<!-- <text class="span-des">手机号：</text> -->
			<input class="phone-number" type="text" v-model="keyword" placeholder="输入学校、商务楼、地址" />
		</view>
		<view style="margin-top: 20upx;" @click="doSearch()"><button size="default" style="background-color: #3190e8;color: #ffffff;width: 650upx;">提交</button></view>
		<view style="margin-top: 40upx;width: 600upx;">
			<view v-for="(item, index) in dataList" :key="item" style="border-top: 1upx solid #e4e4e4;padding: 12upx 0;" @click="gotoAddress()">
				<text>{{ item.name }}</text>
				<view class="ppp" style="font-size: 22upx;color: #666666;">{{ item.address }}</view>
			</view>
		</view>
		<!-- 搜索记录 -->
		<view class="record" v-if="dataList.length == 0">
			<view class="record_heand" style="margin-left: -30upx;">
				<text>搜索历史</text>
				<image class="iconfont icon-shanchu" @click="delete_key"></image>
				<!-- 点击历史记录直接执行搜索 -->
			</view>
			<!-- 搜索历史内容 -->
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length > 0">
					<!-- v-if:判断是否存在历史记录 -->
					<view class="keyword">
						<view v-for="(keyword, index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{ keyword }}</view>
						<!-- 循环渲染历史记录数组内容 -->
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { $fetch_v1_pois } from '../../../apis/ryl-port.js';
export default {
	data() {
		return {
			keyword: '',
			duration: 0,
			interVal: null,
			city: {},
			oldKeywordList: [], //历史记录
			dataList: []
		};
	},
	onLoad(val) {
		this.city = JSON.parse(val.city);
		this.getWordData();
		console.log(JSON.stringify(this.city));
		uni.setNavigationBarTitle({
							title: this.city.name
						});
	},
	methods: {
		cutCity(){
			//uni.navigateBack()//默认delta:1
			uni.navigateBack({
				delta:1,//返回层数，2则上上页
			})

		},
		gotoAddress() {
			uni.showToast({ title: '跳转', icon: 'none' });
		},
		//执行搜索
		doSearch(keyword) {
			keyword = this.keyword;
			if (keyword == '') {
				if (this.keyword.length == 0) {
					//判断是否输入内容
					console.log('不执行搜索');
					uni.showToast({
						//没有则弹出提示框，提示未输入
						title: '请输入关键字',
						icon: 'none'
					});
				} else if (this.keyword.length >= 1) {
					//若存在输入内容，执行搜索
					console.log('执行了搜索');
					keyword = keyword === false ? this.keyword : keyword;
					this.keyword = keyword;
					this.saveKeyword(keyword); //保存为历史,执行此事件
					// uni.showToast({//弹出提示框
					// 	title: keyword,
					// 	icon: 'none',
					// 	duration: 2000
					// })
				}
			} else if (keyword != '') {
				this.keyword = keyword;
				console.log('执行了搜索');
				keyword = keyword === false ? this.keyword : keyword;
				this.keyword = keyword;
				this.saveKeyword(keyword); //保存为历史,执行此事件
				$fetch_v1_pois(this.city.id, this.keyword).then(res => {
					// this.data = res.data
					console.log(JSON.stringify(res.data));
					this.dataList = res.data;
					// this.codeImg = imgCodeRes.data.code;
				});
			}
		},
		//保存关键字到历史
		saveKeyword(keyword) {
			uni.getStorage({
				key: 'OldKeys',
				success: res => {
					var OldKeys = JSON.parse(res.data);
					var findIndex = OldKeys.indexOf(keyword);
					if (findIndex == -1) {
						OldKeys.unshift(keyword);
					} else {
						OldKeys.splice(findIndex, 1);
						OldKeys.unshift(keyword);
					}
					//最多十个记录
					OldKeys.length > 10 && OldKeys.pop(); //删除数组尾部元素
					uni.setStorage({
						key: 'OldKeys',
						data: JSON.stringify(OldKeys)
					});
					this.oldKeywordList = OldKeys; //更新历史记录
				},
				fail: e => {
					var OldKeys = [keyword];
					uni.setStorage({
						key: 'OldKeys',
						data: JSON.stringify(OldKeys)
					});
					this.oldKeywordList = OldKeys; //更新历史记录
				}
			});
		},
		getWordData() {
			uni.getStorage({
				key: 'OldKeys',
				success: res => {
					var OldKeys = JSON.parse(res.data);

					this.oldKeywordList = OldKeys; //更新历史记录
				},
				fail: e => {}
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
.ppp {
	width: 560upx; /*定义块元素的宽度*/
	// max-height: 25upx;
	white-space: nowrap; /*内容超宽后禁止换行显示*/
	overflow: hidden; /*超出部分隐藏*/
	text-overflow: ellipsis; /*文字超出部分以省略号显示*/
}

.record {
	.record_heand {
		margin-top: 30rpx;
		display: flex;
		text {
			width: 80%;
			height: 50rpx;
			//background-color: #007AFF;
			margin-left: 50rpx;
		}
		image {
			width: 10%;
			height: 50rpx;
			//background-color: #1AAD19;
			margin-right: 50rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-left: 70rpx;
		}
	}
	.record_buttom {
	}
}
.example {
	padding: 30rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.phone {
		display: flex;
		background-color: #f8f8f8;
		padding: 30rpx;
		align-items: center;
		justify-content: center;

		.span-des {
			font-size: 35rpx;
			font-weight: bold;
			color: #333333;
		}

		.phone-number {
			width: 600rpx;
			height: 40rpx;
			color: #333;
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
<style lang="scss" scoped>
.record {
	.record_heand {
		margin-top: 30rpx;
		display: flex;
		text {
			width: 80%;
			height: 50rpx;
			//background-color: #007AFF;
			margin-left: 50rpx;
		}
		image {
			width: 10%;
			height: 50rpx;
			//background-color: #1AAD19;
			margin-right: 50rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-left: 70rpx;
		}
	}
	.record_buttom {
	}
}
.keyword-box .keyword-block {
	padding: 10upx 0;
}
.keyword-box .keyword-block .keyword-list-header {
	width: 94%;
	padding: 10upx 3%;
	font-size: 27upx;
	color: #333;
	display: flex;
	justify-content: space-between;
}
.keyword-box .keyword-block .keyword-list-header image {
	width: 40upx;
	height: 40upx;
}
.keyword-box .keyword-block .keyword {
	width: 94%;
	padding: 3px 3%;
	display: flex;
	flex-flow: wrap;
	justify-content: flex-start;
}
.keyword-box .keyword-block .hide-hot-tis {
	display: flex;
	justify-content: center;
	font-size: 28upx;
	color: #6b6b6b;
}
.keyword-box .keyword-block .keyword > view {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20upx;
	padding: 0 30upx;
	margin: 10upx 20upx 10upx 0;
	height: 60upx;
	font-size: 28upx;
	background-color: rgb(242, 242, 242);
	color: #6b6b6b;
}
.yingcang {
	margin: 50rpx 50rpx;
}
</style>
