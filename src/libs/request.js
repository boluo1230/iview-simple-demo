import axios from 'axios'
import qs from 'qs'

let initRequest = (vue, store, router) => {
  const apiHost = store.state.apiHost
  axios.defaults.baseURL = apiHost
  console.log(apiHost)
  // http request 拦截器，通过这个，我们就可以把Cookie传到后台
  // axios.interceptors.request.use(config => {
  //   // let content = getToken()
  //
  //   let auth = store.state.user.auth
  //   if (!auth) { // 刷新后对其重新赋值
  //     let user = JSON.parse(localStorage.getItem('user'))
  //     store.dispatch('getUserInfo', user)
  //     config.headers.common.auth = store.state.user.auth
  //   } else {
  //     config.headers.common.auth = auth
  //   }
  //   config.withCredentials = true
  //   return config
  // },
  // err => {
  //   return Promise.reject(err)
  // })

  // http response 拦截器
  // axios.interceptors.response.use(
  //   response => { // response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
  //     if (response.data.code === 401) {
  //       vue.prototype.$Notice.error({ title: '登录超时，请重新登录' })
  //       router.push({ path: '/login' })
  //     }
  //     return response
  //   },
  //   error => {
  //     return Promise.reject(error)
  //   })
}

let doGet = (uri, params) => {
  return axios.get(uri, params)
}

let doPost = (uri, params) => {
  return axios.post(uri, qs.stringify(params))
}

let doDelete = (uri, params) => {
  return axios.delete(uri, params)
}

let doPut = (uri, pamras) => {
  return axios.put(uri, pamras)
}

export default {
  doPost,
  doGet,
  doDelete,
  doPut,
  initRequest
}
