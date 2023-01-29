//引入req
import req from './request'

// 订单列表
export const $fetch_bos_v2_users = (user_id,params)=>req('bos/v2/users/'+user_id+'/orders','Get',params)
// 服务中心v3/profile/explain
export const $fetch_v3_profile_explain = ()=>req('v3/profile/explain','Get')
// 订单详情https://elm.cangdu.org/bos/v1/users/:user_id/orders/:order_id/snapshot
export const $fetch_bos_v1_users = (user_id,order_id)=>req('bos/v1/users/'+user_id+'/orders/'+order_id+'/snapshot','Get')