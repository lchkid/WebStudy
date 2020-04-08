// commonJS import
// const {add, mul} = require("./math")

// ES6 import
import {add, mul} from './js/math'

console.log(add(30, 20))
console.log(mul(20, 30))

// require("./css/normarl.css")
import css from './css/normarl.css'

import less from './css/special.less'

document.writeln('<h2>document</h2>')

import Vue from 'vue'

//3. 通过定义对象方式，剥离VUE实例中的组件
// const cpn = {
//   template: `<div>
//   <h2>{{message}}</h2>
//   <button @click="btnClick">{{name}}</button>
// </div>`,
//   data() {
//     return {
//       message: 'hello world',
//       name: 'lchkid'
//     }
//   },
//   methods: {
//     btnClick() {
//       console.log('object')
//     }
//   }
// }

// 5.通过模块导入方式，剥离main.js中的组件
// import cpnn from './js/cpn'

// 6.通过导入.vue方式，剥离组件js中的template(需要vue-loader等)
import cpnn from './vue/cpn.vue'

new Vue({
  el: '#app',
  // 1.通过template覆盖el方式，剥离HTML中VUE实例的模板
  // template: `
  //   <div>
  //     <h2>{{message}}</h2>
  //     <button @click="btnClick">{{name}}</button>
  //   </div>`,

  template: `<cpnn></cpnn>`,
  components: {
    // 2.通过组件方式，剥离VUE实例中的template模板
    // 'cpn': {
    //   template: `<div>
    //   <h2>{{message}}</h2>
    //   <button @click="btnClick">{{name}}</button>
    // </div>`,
    //   data() {
    //     return {
    //       message: 'hello world',
    //       name: 'lchkid'
    //     }
    //   },
    //   methods: {
    //     btnClick() {
    //       console.log('hello')
    //     }
    //   }
    // }

    //3. 通过定义对象方式，剥离VUE实例中的组件
    // 'cpn': cpn,

    //4. ES6 字面量增强写法
    cpnn,
  }
})


document.writeln('<h1>separate test</h1>')