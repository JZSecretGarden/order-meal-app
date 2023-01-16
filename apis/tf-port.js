//引入req
import req from './request'

// 订单列表
export const $fetch_bos_v2_users = (user_id,params)=>req('bos/v2/users/'+user_id+'/orders','Get',params)