import request from '@/libs/request'

/**
 * 公众号基础配置信息api
 */

let getMpAppList = () => {
  return request.doGet('/mp/app/list')
}

let getMpAppInfo = (appId) => {
  return request.doGet(`/mp/app/info?appId=${appId}`)
}

let saveMpAppInfo = (params) => {
  console.log(params)
  return request.doPost('/mp/info/appId'.replace('appId', params._id), params)
}

export {
  getMpAppList,
  getMpAppInfo,
  saveMpAppInfo
}
