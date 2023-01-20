//引入req
import req from './request'

// 订单列表
export const $fetch_bos_v2_users = (user_id,params)=>req('bos/v2/users/'+user_id+'/orders','Get',params)
// 服务中心v3/profile/explain
export const $fetch_v3_profile_explain = ()=>req('v3/profile/explain','Get')