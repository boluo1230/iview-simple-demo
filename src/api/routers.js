import request from '@/libs/request'

export const getRouterReq = (access) => {
  return request.doGet('/get_router', { access })
}
