import mockjs from "mockjs"
import home from './mockServeData/home'
//定义mock请求拦截
mockjs.mock('/api/home/getData',home.getStatisticalData)