//引入req
import req from './request'

// 食品分类列表 v2/index_entry
export const $fetch_indexentry = ()=>req('v2/index_entry','Get')

// 获取商铺列表 shopping/restaurants
export const $fetch_restaurants = (query)=>req('shopping/restaurants','Get',query)

// 搜索餐馆 v4/restaurants
export const $fetch_searchrestaurants = (query)=>req('v4/restaurants','Get',query)