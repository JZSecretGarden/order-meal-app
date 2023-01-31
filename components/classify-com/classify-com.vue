<template>
	<view class="wrap">
		<view class="top-wrap">
			<!-- 已选择分类板块 -->
			<view class="item" v-for="(item,index) in selectText" @click="clickItem(index)">
				<text :class="{'active-item':openPopIndex==index}" >{{item}}</text>
				<u-icon :name="iconName(index)" size="14" :color="iconColor(index)" ></u-icon>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class="shade" v-show="openPopIndex!=-1" @click="closePop">
		<TransitionGroup name="popshow">
		<!-- 弹窗1 分类 -->
			<view class="pop1 pop" v-show="openPopIndex==0" key="1" @click.stop>
				<scroll-view scroll-y="true" class="scroll-wrap">
					<!-- 左分类 -->
					<view class="pop1-left-menu class-menu">
						<view class="left-menu-item" v-for="(item,index) in classData" :key="item.id" @click="clickFristMneu(index)">
							<image :src="'https://fuss10.elemecdn.com/'+item.image_url" mode="aspectFill"></image>
							<text>{{item.name}}</text> 
							<view class="" style="font-size: 12px;background-color: #f4f4f4;border-radius: 20upx;padding: 2px 4px;">{{item.count}}</view>
							<u-icon class="item-icon" name="arrow-right-double"></u-icon>
						</view>
					</view>
				</scroll-view >
				<!-- 右分类 -->
				<scroll-view scroll-y="true" class="scroll-wrap">
					<view class="pop1-right-menu class-menu">
						<view class="right-menu-item" v-for="(item,index) in classData[fristMenuIndex].sub_categories" @click="clickCommodity(item.name,item.id)">
							<text>{{item.name}}</text> 
							<u-icon class="item-icon" name="arrow-right-double"></u-icon>
						</view>
					</view>
				</scroll-view>
			</view>
		<!-- 弹窗2 排序 -->
			<view class="pop2 pop" v-show="openPopIndex==1" key="2">
				<view class="sort-list">
					<view class="sort-item" v-for="(item,index) in sortText" @click="clickSort(index,item)">
						<image src="../../static/logo.png" mode="aspectFill"></image>
						<view class="sort-item-text" :class="{'active-sort-item-text':index==selectSortIndex}" >{{item}}</view>
						<u-icon v-show="selectSortIndex==index" class="sort-item-active" name="checkbox-mark" color="#3190e8"></u-icon>
					</view>
				</view>
			</view>
		<!-- 弹窗3 筛选 -->
			<view class="pop3 pop" v-show="openPopIndex==2" key="3" @click.stop>
				<view class="" style="background-color: #fff;">
					<view class="screen-box">
						<view class="screen-item" v-for="(item,index) in screenData">
							<view class="screen-title"><text>{{item.title}}</text><text v-if="item.multiple" >(可以多选)</text></view>
							<view class="screen-child-wrap">							
								<view class="screen-child-item" :class="{'active-screen-child':selectScreen[index]==child.text}" v-for="(child,c_index) in item.data" @click="clickScreenChild(child)">
									<u-icon v-show="!screenItemImg(child.id)" class="screen-active-icon" name="checkbox-mark" color="#3190e8" size="18"></u-icon>
									<image v-show="screenItemImg(child.id)" :src="child.img" mode=""></image>
									<text>{{child.text}}</text>
								</view>
							</view>
						</view>					
					</view>
					<view class="screen-btn">
						<u-button size="default" @click="clearAll" >清空</u-button>
						<u-button size="default" :custom-style="sureBtn" @click="confirm">确定</u-button>
					</view>
				</view>
			</view>
		</TransitionGroup>
		</view>
	</view>
</template>

<script>
	import { $food_class,$shopping_restaurants } from '../../apis/jz-port.js'
	import { nextTick } from "vue"
	export default {
		props:['class_name'],
		data() {
			return {
				selectText:['分类','排序','筛选'],
				openPopIndex:-1,	//当前打开界面下标
				classData:[],	//分类数据
				fristMenuIndex:0, //当前一级菜单下标
				sortText:['智能排序','距离最近','销量最高','起送价最低','配送速度最快','评分最高'],
				sortId:[4,5,6,1,2,3],
				sortIcon:[],
				selectSortIndex:0,	//当前排序选中下标
				screenData:[
					{title:'配送方式',data:[{img:'',text:'蜂鸟配送', id:1}],multiple:false},
					{title:'商家属性',data:[{img:'',text:'品牌商家', id:8},{img:'',text:'外卖保',id:7},{img:'',text:'准时达',id:9},{img:'',text:'新店',id:5},{img:'',text:'在线支付',id:3},{img:'',text:'开发票',id:4}],multiple:true},
				],
				selectScreen:[],
				sureBtn:{
					color:"#fff",
					backgroundColor:'#3190e8'
				}
			}
		},
		computed:{
			iconName(){		//改变图标样式
				return index=> this.openPopIndex==index? 'arrow-up-fill':'arrow-down-fill'
			},
			iconColor(){	//改变图标颜色
				return index=> this.openPopIndex==index? '#3190e8':''
			},
			screenItemImg(){	//筛选元素图片显示
				return id=>!this.selectScreen.includes(id)
			}
		},
		methods: {
			clickItem(index){	//点击分类模块元素以打开弹窗
				this.openPopIndex == index ? this.openPopIndex=-1 : this.openPopIndex = index
			},

			clickFristMneu(index){	//点击分类中的一级菜单
				this.fristMenuIndex = index
			},
			clickCommodity(item,id){//点击分类中的商品
				this.selectText[0] = item
				this.closePop()
				this.$emit('className',id)				
			},
			clickSort(index,item){	//点击排序元素
				this.selectSortIndex = index
				this.$emit("sortId",this.sortId[index])
				this.closePop()
			},
			clickScreenChild(item){	//点击筛选元素
				this.selectScreen.includes(item.id)? this.selectScreen.splice(this.selectScreen.indexOf(item.id),1) :this.selectScreen.push(item.id)	
			},
			clearAll(){		//点击清空按钮
				this.selectScreen = []
			},
			confirm(){	//点击确定按钮
				this.openPopIndex=-1				
				this.$emit("screenData",this.selectScreen)
			},
			closePop(){		//关闭弹窗与遮罩层
				this.openPopIndex=-1
			}
		},
		created() {
			$food_class().then(val=>{	//获取食品分类列表
				console.log(val)
				this.classData = val.data
			})
		}
	}
</script>

<style scoped>
	.popshow-leave-active{
		transition: all 0.5s;
		position: absolute;
		width: 750upx;
	}	
	.popshow-enter-active{
		animation: enterKeys 0.5s;
	}		
	@keyframes enterKeys {
		0%{
			transform: translateY(-800upx);
			opacity: 0;
		}
		50%{
			transform: translateY(100upx);
		}
		100%{
			transform: translateY(0upx);
			opacity: 1;
		}
	}
	.popshow-leave-to{
		transform: translateY(-800upx);
		opacity: 0;
	}	
	.wrap{
		width: 750upx;
		position: fixed;
		top: 80upx;
		z-index: 100;
	}
	.top-wrap{
		display: flex;
		padding: 20upx 0;
		border-bottom: 1px solid #f4f4f4;
		background-color: #fff;
	}
	.item{
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50upx;
		font-size: 14px;
	}
	.item:nth-child(2){
		border-left: 1px solid #c4c4c4;
		border-right: 1px solid #c4c4c4;
	}
	.active-item{
		color: #3190e8;
	}
	.pop{
		height: 600upx;
	}
	.pop>scroll-view{
		height: 100%;
	}
	.pop1{
		display: flex;
	}
	.scroll-wrap{
		width: 50%;
	}
	.class-menu{
		background-color: #fff;
		min-height: 600upx;
	}
	.sort-list,.screen-box{
		background-color: #fff;
	}
	.pop1-left-menu{
		background-color: #f4f4f4;
	}
	.left-menu-item{
		display: flex;
		align-items: center;
		padding: 10upx 40upx;
		font-size: 14px;
		color: #565656;
	}
	.left-menu-item:hover{
		background-color: #e8e8e8;
	}
	.right-menu-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 40upx;
		font-size: 14px;
		color: #565656;
		border-bottom: 1px solid #f4f4f4;
	}
	.left-menu-item>text{
		flex-grow: 1;
	}
	.left-menu-item>image{
		height: 60upx;
		width: 60upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.sort-item{
		display: flex;
		align-items: center;
		padding: 0 0 0 40upx;
		position: relative;
	}
	.sort-item>image{
		height: 60upx;
		width: 60upx;
		background-color: #c4c4c4;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.sort-item-text{
		font-size: 14px;
		color: #565656;
		border-bottom: 1px solid #e8e8e8;
		flex-grow: 1;
		padding: 40upx 0;
	}
	.active-sort-item-text{
		color: #3190e8;
	}
	.sort-item-active{
		position: absolute;
		right: 20upx;
	}
	.screen-box{
		padding: 0 20upx;
	}
	.screen-item{
		padding-top: 20upx;
	}
	.screen-title{
		font-size: 28upx;
	}
	.screen-child-wrap{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.screen-child-item{
		display: flex;
		border: 1px solid #c4c4c4;
		padding: 10upx;
		width: 200upx;
		margin-top: 10upx;
		border-radius: 10upx;
	}
	.screen-child-item>text{
		font-size: 14px;
		margin-left: 20upx;
	}
	.screen-child-item>image{
		width: 40upx;
		height: 40upx;
		background-color: #c4c4c4;
	}
	.screen-btn{
		background-color: #f4f4f4;
		display: flex;
		padding: 10upx;
		margin-top: 20upx;
	}
	.active-screen-child{
		color: #3190e8;
		border-color: #3190e8;
	}
	.screen-active-icon{
		width: 40upx;
		height: 40upx;
	}
	.shade{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>