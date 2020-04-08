console.log('test')
// 2.定义的时候直接导出变量
export let name = 'xiaoming';
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if(flag) {
  console.log(sum(20, 30));
}

name = 'xiaoxiao'

// 1.最后导出需要的内容
export {flag, sum}

// 3.定义的时候直接导出函数和类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  constructor(xingming, nianling) {
    this.name = xingming;
    this.age = nianling;
  }

  run() {
    console.log(this.name + '在奔跑！')
  }
}