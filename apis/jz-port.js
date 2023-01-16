//引入req
import req from './request'
export const $commodity_list = (params)=>req('shopping/v2/menu','Get',params)