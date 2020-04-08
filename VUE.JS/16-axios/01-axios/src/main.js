import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 1.axios处理单独网络请求
// axios({
//   url: 'http://localhost:3000/search',
//   method: 'get',
//   params: {
//     keywords: 'way back'
//   }
// }).then(res => {
//   console.log(res);
// })

// 2.axios处理并发网络请求
// axios.all([axios({
//     url: 'http://localhost:3000/artist/list',
//     params: {
//       cat: '1001',
//       initial: 'z'
//     }
//   }), axios({
//     url: 'http://localhost:3000/search',
//     params: {
//       keywords: '七里香'
//     }
//   })]).then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
//   })

// 3.使用全局配置
// axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.timeout = 5000;

// axios({
//   url: '/search',
//   method: 'get',
//   params: {
//     keywords: 'way back'
//   }
// }).then(res => {
//   console.log(res);
// })

// 4.使用自定义axios实例
// const instance = axios.create({
//   baseURL: 'http://localhost:3000/',
//   timeout: 5000
// })

// instance({
//   url: '/search',
//   params: {
//     keywords: 'way back'
//   }
// }).then(res => {
//   console.log(res);
// })

// 5.封装自定义axios模块
// import {request} from './network/request'

// request({
//   url: '/artist/list',
//   params: {
//     cat: 1001,
//     initial: 'b'
//   }
// }).then(res => {
//   console.log(res);
// })