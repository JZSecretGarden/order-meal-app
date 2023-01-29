<template>
	<view><lhSelectCity :value="value" :windowHeight="windowHeight" :hotCitys="hotCitys" @on-select="City" /></view>
</template>

<script>
import lhSelectCity from '@/components/lh-select-city/index.nvue';
export default {
	components: { lhSelectCity },
	data() {
		return {
			hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
			value: '杭州',
			windowHeight: ''
		};
	},
	onLoad() {
		// 计算出可用高度
		this.windowHeight = uni.getSystemInfoSync().windowHeight + 'px';
		console.log("2222")
	},
	methods: {
		// 选中事件
		City(city) {
			console.log(city);
			// uni.navigateTo({
			// 	url:'../pub/mapDetails/mapDetails',
			// 	fail (error) {
			// 	        console.log(error)
			// 	    }
			// })
		}
	}
};
</script>

<style></style>
