import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
  })
  // 2.axios拦截器
  // 2.1 请求拦截器
  instance.interceptors.request.use(config => {
    // 2.1.1 自定义header
    // 2.1.2 提交时一些动画
    // 2.1.3 判断提交时某些接口是否需要携带一些参数(token),若无进行跳转
    console.log('请求成功', config);
    return config;
  }, err => {
    console.log('请求失败', err);
  })
  // 2.2 响应拦截器
  instance.interceptors.response.use(res => {
    console.log('响应成功', res);
    // 只要返回data给vue实例进行二次处理
    return res.data
  }, err => {
    console.log('响应失败', err);
  })

  // 3.发送网络请求
  return instance(config);
}