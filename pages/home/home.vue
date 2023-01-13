<!-- 外卖页面 -->
<template>
	<view>
		<button @click="testPort">测试接口</button>
	</view>
</template>

<script>
	import {$fetch_index_entry} from "../../apis/port.js"
	export default {
		data() {
			return {
				id:1
			}
		},
		methods: {
			testPort:function(){
				$fetch_index_entry({
					geohash:"31.22967,121.4762"
				}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>
