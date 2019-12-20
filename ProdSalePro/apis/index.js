import http from './http.js'

// 用户登陆
export const postLogin = (data) => http.POST('/user/login', data)
// 用户注册
export const postRegister = (data) => http.POST('/user/register', data)
// 获取短信验证码
export const getMsgCode = (data) => http.GET('/register/sendMsg', data)
//  获取图片验证吗
export const getCaptcha = (data) => http.GET('/user/captcha', data)