<!-- 搜索页 -->
<template>
	<view class="search-box">
		
		<view class="search-box-input">
			<u-input v-model="keyword" type="text" style="width: 70%;background-color: #f2f2f2;"
				placeholder="请输入商家或美食名称" @input="funcInput"/>
			<u-button type="primary" style="width: 20%;margin-left: 10px;" @click="FuncKeyword">提交</u-button>
		</view>
		<!-- 历史搜索 -->
		<view class="search-box-result" v-show="isShow1">
			<h4>搜索历史</h4>
			<ul>
				<li class="result-li" v-for="(item,i) in List" :key="i"
					style="display: flex;justify-content: space-between;" @click="funcSearch(item)">
					<view>{{item}}</view>
					<view @click="deleteSingle(i)">×</view>
				</li>
			</ul>
			<view class="no" style="color: blue;background-color: white;" @click="deleteMany">清空搜索历史</view>

		</view>

		<!-- 搜索商家 -->
		<view class="search-box-result" v-show="isShow2">
			<h4>商家</h4>
			<ul>
				<li class="result-li" v-for="(item,i) in resultList" :key="i">
					<image :src="'https://elm.cangdu.org/img/'+item.image_path"></image>
					<view class="result-li-right">
						<text>{{item.name}}</text>
						<text>月售 {{item.recent_order_num}} 单</text>
						<text>{{item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</text>
					</view>
				</li>


			</ul>
		</view>

		<!-- 没有搜索到商家 -->
		<view class="no" v-show="isShow3">很抱歉！没有找到</view>
	</view>
</template>

<script>
	import {
		$fetch_searchrestaurants
	} from '@/apis/zm-port.js'
	export default {
		data() {
			return {
				keyword: '',
				historyList: [], // 初始化搜索历史
				resultList: [], // 初始化搜索结果				
				isShow1: false,
				isShow2: false,
				isShow3: false,
				geohash:[],
				List:[]
			}
		},
		onLoad() {
			let _this = this
			//获取选择城市
			uni.getStorage({
				key:"city",
				success(res){
					_this.geohash = res.data.geohash
					
				}
			})
			
		},
		methods: {
			funcInput(){
				if(this.keyword != ''){
					this.historyList.push(this.keyword)
					this.isShow1 = true
					this.isShow2 = false
					this.isShow3 = false
					
				}else{
					this.isShow1 = false
					this.isShow2 = false
					this.isShow3 = false
				}
				
			},
			// 搜索历史对应 的 
			funcSearch(v) {
				
				this.keyword = ''
				let word = v
				$fetch_searchrestaurants({
					geohash: this.geohash,
					keyword: word
				}).then(res=>{
					 if(res.data.length > 0){
					 	this.isShow1 = false
					 	this.isShow2 = true
					 	this.isShow3 = false
					 	
					 	this.resultList = res.data
					 }else{
					 	
					 	this.isShow3 = true
					 	this.isShow1 = false
					 	this.isShow2 = false
					 }
				})
				

			},
			// 提交 
			FuncKeyword() {
				// 搜索餐馆
				// 参数为 geohash string经纬度 keyword string关键词
				// 点击的时候 前提是有历史搜索的话显示历史搜索  没有就显示里 显示
                this.historyList.push(this.keyword)
				let newArry =[]
				for(let i=0;i<this.historyList.length;i++){
					if(newArry.indexOf(this.historyList[i]) == -1){
						newArry.push(this.historyList[i])
					}
				}
				this.List = newArry
				
				uni.setStorage({
					key: "historyList",
					data: newArry
				}) //将选择城市存储于本地
				$fetch_searchrestaurants({
					geohash: this.geohash,
					keyword: this.keyword
				}).then(res => {
					// console.log(res.data.length)
					if(res.data.length > 0){
						this.isShow1 = false
						this.isShow2 = true
						this.isShow3 = false
						
						this.resultList = res.data
					}else{
						
						this.isShow3 = true
						this.isShow1 = false
						this.isShow2 = false
					}
					
				
				})

				this.saveSearchHistory()

			},
			saveSearchHistory() {
				// this.historyList.push(this.keyword)
				const set = new Set(this.historyList)
				set.delete(this.keyword)
				set.add(this.keyword)
				this.historyList = Array.from(set)
			},
			// 删除单个
			deleteSingle(v) {
				this.historyList.splice(v, 1)
			},
			// 删除全部
			deleteMany() {
				this.historyList = []
				this.keyword = ''
				this.isShow1 = false
			}
		}
	}
</script>

<style>
	.search-box {
		width: 100%;
		background-color: lightgray;
	}

	.search-box-back {
		width: 100%;
		height: 44px;
		padding: 0px 10px;
		box-sizing: border-box;
		font-size: 20px;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		background-color: royalblue;
		color: white;
		align-items: center;
	}

	.search-box-back>view:nth-child(2) {
		width: 95%;
		text-align: center;
	}

	.search-box-input {
		width: 100%;
		padding: 20px 10px 20px 10px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.search-box-result {
		width: 100%;

	}

	.search-box-result>h4 {
		height: 50px;
		line-height: 50px;
		padding: 5px;
		box-sizing: border-box;
		font-size: 18px;
		color: #666;
		background-color: #f2f2f2;
	}

	.search-box-result>ul {
		width: 100%;
		padding: 5px;
		box-sizing: border-box;
		background-color: white;
	}

	.result-li {
		width: 100%;
		list-style: none;
		padding: 10px 5px;
		box-sizing: border-box;
		border-bottom: 1px solid #f2f2f2;
		display: flex;
		justify-content: space-between;

	}

	.result-li>image {
		width: 100px;
		height: 100px;

	}

	.result-li-right {
		width: 70%;
		border-bottom: 1px solid #ede8e8f0;
		display: flex;
		flex-direction: column;
		font-size: 18px;
		font-weight: bold;
	}

	.result-li-right>text {
		height: 45px;
		line-height: 45px;
	}

	.no {
		width: 100%;
		font-size: 20px;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
</style>
