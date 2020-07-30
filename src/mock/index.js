import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// mock配置
Mock.mock(/\/api\/getUserInfo/, getUserInfo)

export default Mock
