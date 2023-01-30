<!-- 搜索页 -->
<template>
	<view class="search-box">
		<view class="search-box-back">
			<view><image style="width: 30px;height: 30px;" src="../../static/my/arrow-in.png"></view>
			<view>搜索</view>
		</view>
		<view class="search-box-input">
		   <u-input v-model="keyword" type="text" style="width: 70%;background-color: #f2f2f2;" placeholder="请输入商家或美食名称"/>
		   <u-button type="primary" style="width: 20%;margin-left: 10px;" @click="FuncKeyword">提交</u-button>
		</view>
		<!-- 历史搜索 -->
		<view class="search-box-result" v-if="historyList.length !== 0">
			<h4>搜索历史</h4>
			<ul>
				<li class="result-li" v-for="(item,i) in historyList" :key="i" style="display: flex;justify-content: space-between;">
					<view>{{item}}</view>
					<view @click="deleteSingle(i)">×</view>
				</li>
			</ul>
			<view class="no" style="color: blue;background-color: white;" @click="deleteMany">清空搜索历史</view>
			
		</view>
		
		<!-- 搜索商家 -->
		<view class="search-box-result" v-else>
			<h4>商家</h4>
			<ul>
				<li class="result-li">
					<image src="../../static/search/logo.png"></image>
					<view class="result-li-right">
						<text>fdgfg</text>
					 <text>月售 841 单</text>
						<text>20 元起送 / 距离2200.5公里</text>
					</view>
				</li>
				<li class="result-li">
					<image src="../../static/search/logo.png"></image>
					<view class="result-li-right">
						<text>fdgfg</text>
						<text>月售 841 单</text>
						<text>20 元起送 / 距离2200.5公里</text>
					</view>
				</li>
		
			</ul>
		</view>
		<!-- 没有搜索到商家 -->
		<!-- <view class="no">很抱歉！没有找到</view> -->
	</view>
</template>

<script>
	import {$fetch_searchrestaurants} from '@/apis/zm-port.js'
	export default {
		data() {
			return {
				keyword: '',
				historyList:[],  // 初始化搜索历史
				resultList:[],   // 初始化搜索结果				
								
			}
		},
		onLoad() {
			 // 搜索餐馆
			 // 参数为 geohash string经纬度 keyword string关键词
			 // $fetch_searchrestaurants().then(res=>{
				//  console.log(res)
			 // })
		},
		methods: {
			FuncKeyword() {
				// 搜索餐馆
				// 参数为 geohash string经纬度 keyword string关键词
				let geohash = ['31.38098','104.063049'];
				let gg = geohash.toString()
			    console.log(gg)
				$fetch_searchrestaurants({
					geohash: gg,
					keyword: this.keyword
				}).then(res => {
					// console.log(res)
				})
			
			  this.saveSearchHistory()
			},
			saveSearchHistory(){
				// this.historyList.push(this.keyword)
				const set = new Set(this.historyList)
				set.delete(this.keyword)
				set.add(this.keyword)
				this.historyList = Array.from(set)
			},
			// 删除单个
			deleteSingle(v){
				this.historyList.splice(v,1)
			},
			deleteMany(){
				this.historyList= []
			}
		}
	}
</script>

<style>
.search-box{
	width: 100%;
	background-color: lightgray;
}
.search-box-back{
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
.search-box-back>view:nth-child(2){
	width: 95%;
	text-align: center;
}
.search-box-input{
	    width: 100%;
	    padding: 20px 10px 20px 10px;
	    background-color: white;
	    display: flex;
	    justify-content: space-between;
	    box-sizing: border-box;
}
.search-box-result{
	width: 100%;
	
}
.search-box-result>h4{
	height: 50px;
	    line-height: 50px;
	    padding: 5px;
	    box-sizing: border-box;
	    font-size: 18px;
	    color: #666;
	    background-color: #f2f2f2;
}
.search-box-result>ul{
	width: 100%;
	padding: 5px;
	box-sizing: border-box;
	background-color: white;
}
.result-li{
	width: 100%;
	list-style: none;
	padding: 10px 5px;
	box-sizing: border-box;
	border-bottom: 1px solid #f2f2f2;
	display: flex;
	justify-content: space-between;
	
}
.result-li>image{
	width: 100px;
	height: 100px;
	
}
.result-li-right{
	width: 70%;
	border-bottom: 1px solid #ede8e8f0;
	display: flex;
	flex-direction: column;
	font-size: 18px;
	font-weight: bold;
}
.result-li-right>text{
	height: 45px;
	line-height: 45px;
}
.no{
		width: 100%;
		    font-size: 20px;
		    text-align: center;
		    height: 40px;
		    line-height: 40px;
	}
</style>
