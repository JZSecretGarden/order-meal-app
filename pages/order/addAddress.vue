<template>
	<view>
		地址新增
	</view>
</template>

<script>
	import {$getEvaluate} from '../../apis/zjl-port.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			$getEvaluate(1,{limit:3}).then((res)=>{
				console.log(res);
			})
		}
	}
</script>

<style>

</style>