//引入req
import req from './request'
// 

// 获取城市列表
export const $getCityList = (obj)=> req('v1/cities','get',obj);
// 搜索地址
export const $searchAddress = (obj)=> req('v1/pois','get',obj);
//获取收货地址列表
export const $addressGetGood = (id)=> req('v1/users/'+id+'/addresses','get');
// 增加地址https://elm.cangdu.org/v1/users/:user_id/addresses
export const $addressGetGoodAdd = (id,params)=> req('v1/users/'+id+'/addresses','post',params);