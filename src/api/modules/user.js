import service from '@/api/service'

export default {
  getUserInfo(params) {
    return service.post('/api/getUserInfo', params)
  }
}