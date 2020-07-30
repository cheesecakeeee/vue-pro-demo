import axios from 'axios'
import router from '@/router'

axios.defaults.timeout = 10000

axios.interceptors.request.use(
  config => {
    // config.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const { status } = error.response

    switch (status) {
      case 401:
        // VSnackbar.warning('登陆超时，请重新登陆')
        console.log('登陆超时，请重新登陆')
        router.replace('/login')
        break
      default:
        return Promise.reject(error.response)
    }
  }
)

export default {
  get(url, params = {}) {
    return axios.get(url, { params })
  },
  post(url, params = {}) {
    return axios.post(url, params)
  },
  put(url, params = {}) {
    return axios.put(url, params)
  }
}
