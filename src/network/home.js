// 获取首页需要的数据
import { request } from './request'
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
