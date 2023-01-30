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
//获取商铺详情
export const $shop_detail = (id)=>req('shopping/restaurant/'+id,'Get')
//加入购物车
export const $add_car = (data)=>req('v1/carts/checkout','POST',data)
//获取收货地址列表
export const $address_list = (id)=>req('v1/users/'+id+'/addresses')
//获取用户信息
export const $user_msg = ()=>req('v1/user','Get')
//删除地址信息
export const $del_address = (data)=>req('v1/users/'+data.user_id+'/addresses/'+data.id,'Delete')