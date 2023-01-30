<!-- 订单页 -->
<template>
	<view class="container">
		<OrderListItem></OrderListItem>
	</view>
</template>

<script>
	import OrderListItem from '../../components/order-list-item/order-list-item.vue'
	export default {
		components:{
			OrderListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.container{
		background-color: #F5F5F5;
		height: 100vh;
	}
</style>
