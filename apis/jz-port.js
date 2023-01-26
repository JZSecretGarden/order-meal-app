//引入req
import req from './request'
// 获取店铺商品分类列表
export const $commodity_list = (params)=>req('shopping/v2/menu','Get',params)
// 获取评价分类
export const $comment_class =  (data)=>req('ugc/v2/restaurants/'+data+'/ratings/tags','Get')
//获取评价信息
export const $comment_content = (id,data)=>req('ugc/v2/restaurants/'+id+'/ratings','Get',data)
//获取食品分类列表
export const $food_class = ()=>req('v2/index_entry','Get')
//获取评价分数
export const $comment_scores = (id)=>req('ugc/v2/restaurants/'+id+'/ratings/scores','Get')