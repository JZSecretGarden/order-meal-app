
// ！！！！！！！！！！千万不要动这里的内容，需要更改，先在群里商量

// 引入服务器地址
import {baseUrl} from './http.js'
// 封装接口
const req =(url,method,data)=>{
  // 必须返回一个promise实例
  return new Promise((resolve,reject)=>{
    uni.request({
      url: baseUrl+url,
      method,
      data,
      success:(res)=>{
        // console.log(res)
        resolve(res)
      },
      fail:(err)=>{
        // console.log(err)
        reject(err)
      }
    })
  })
}
// 暴露req
export default req