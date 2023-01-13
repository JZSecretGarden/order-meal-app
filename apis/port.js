//引入req
import req from './request'

// 获取城市列表
export const $fetch_cities = (params)=>req('v1/cities','Get',params)
// 获取所选城市信息
// 参数需要跟在地址后面时：
export const $fetch_cities_id = (id)=>req('v1/cities/'+id,'Get')
// 搜索地址
export const $fetch_pois = (params)=>req('v1/pois','Get',params)
// 食品分类列表
export const $fetch_index_entry = (params)=>req('v2/index_entry','Get',params)