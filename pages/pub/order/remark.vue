<template>
	<view>
		<view class="quick_mark pad">
			快速备注

		</view>
		<view class="chose pad">
			<view class="box_chose">
				<view class="vioce" :class="{'no_l':index==0,'active':numOnce==index}" v-for="(str,index) in spicy"
					:key='index' @click="getSpicy(index)">
					{{str.name}}
				</view>
			</view>
			<view class="box_chose vioce" :class="{'active':coriander.color==true}" @click="corianderClick(coriander.name)">
				{{coriander.name}}
			</view>
			<view class="box_chose vioce" :class="{'active':onion.color==true}" @click="onionClick(onion.name)">
				{{onion.name}}
			</view>
			<view class="box_chose vioce" :class="{'active':vinegar.color==true}" @click="vinegarClick(onion.name)">
				{{vinegar.name}}
			</view>
			<view class="box_chose vioce" :class="{'active':shallot.color==true}" @click="shallotClick(onion.name)">
				{{shallot.name}}
			</view>
			<view class="box_chose">
				<view class="vioce" :class="{'no_l':index==0,'active':numSec==index}" v-for="(str,index) in ice"
					:key='index' @click="iceClick(index)">
					{{str.name}}
				</view>
			</view>
		</view>
		<!-- 其他备注 -->
		<view class="other_mark pad">
			其他备注
		</view>
		<view class="chose pad">
			<u-input v-model="other" type="textarea" placeholder="请输入备注内容(可不填)"  />
		</view>
		<button @click="sure">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				spicy: [{name: '不要辣'}, {name: '少点辣'}, {name: '多点辣'}],
				coriander: {color:false,name:'不要香菜'},
				onion:{color:false,name:'不要洋葱'},
				vinegar:{color:false,name:'多点醋'},
				shallot:{color:false,name:'多点葱'},
				ice:[{name: '去冰'}, {name: '少冰'}],
				// make:[{set:},{set:[{id:4,name:''}]},{set:[{id:5,name:''}]},{set:[{id:6,name:'去冰'}]},{set:[{id:7,name:''}]},{set:[{id:8,name:'去冰'},{id:9,name:'少冰'}]}],
				numOnce: null,
				numSec: null,
				other:'',
				finalMark:''
			}
		},
		methods: {
			onUnload() {},
			getSpicy(e) {
				this.$data.numOnce = e
				this.$data.finalMark=this.$data.finalMark+'、'+this.$data.spicy[e].name
				console.log(this.$data.spicy[e].name);
			},
			corianderClick(e){
				this.$data.coriander.color=true
				this.$data.finalMark=this.$data.finalMark+'、'+e
			},
			onionClick(e){
				this.$data.onion.color=true
				this.$data.finalMark=this.$data.finalMark+'、'+e
			},
			vinegarClick(e){
				this.$data.vinegar.color=true
				this.$data.finalMark=this.$data.finalMark+'、'+e
			},
			shallotClick(e){
				this.$data.shallot.color=true
				this.$data.finalMark=this.$data.finalMark+'、'+e
			},
			iceClick(e){
				this.$data.numSec = e
				this.$data.finalMark=this.$data.finalMark+'、'+this.$data.ice[e].name
			},
			sure(){
				uni.setStorage({
					key:'markInfo',
					data:this.$data.finalMark,
					success() {
						uni.navigateBack()
					}
				})
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
		display: flex;
		background-color: white;
	}

	.chose {
		padding-top: 0;
		justify-content: left;
		flex-wrap: wrap;
	}

	.box_chose {
		margin-right: 30rpx;
		border-radius: 10rpx;
		display: flex;
		border: 1rpx solid #3190E8;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}

	.vioce {
		border-left: 1rpx solid #3190E8;
		box-sizing: border-box;
		padding: 15rpx 25rpx;

	}
	.no_l{
		border-left: none;
	}
	.active {
		background-color: #3190E8;
		color: white;
	}
	.other_mark{
		margin-top: 30rpx;
	}
	.u-input{
		background-color: #F9F9F9;
		height: 200rpx;
	}
	button{
		background-color: #4CD964;
		border: none;
		width: 90%;
		margin: 30rpx auto;
		color: white;
	}
</style>