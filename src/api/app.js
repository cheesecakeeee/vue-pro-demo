import service from './service'
export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: { appName: '接口请求的appName'}})
      else reject(err)
    })
  })
}

export default {
  getUserInfo(params) {
    return service.get('/getUserInfo', params)
  }
}


