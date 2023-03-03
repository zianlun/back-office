import http from '../utils/request'
export const getData = function(){
    // 返回promise对象
    return http.get('/home/getData')
}