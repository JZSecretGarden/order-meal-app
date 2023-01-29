//引入req
import req from './request'

// 全部城市
export const $fetch_v1_city_group = ()=>req('v1/cities?type=group','Get')

// 当前城市
export const $fetch_v1_city_guess = ()=>req('v1/cities?type=guess','Get')

// 热门城市
export const $fetch_v1_city_hot = ()=>req('v1/cities?type=hot','Get')

// 验证码
export const $fetch_v1_code = ()=>req('v1/captchas','Post')

// 登录
export const $fetch_v2_login = (params)=>req('v2/login','Post',params)

// 搜索
export const $fetch_v1_pois = (city_id,keyword)=>req('v1/pois?city_id='+city_id+'&keyword='+keyword+'&type=search','Get')
