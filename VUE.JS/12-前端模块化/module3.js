import {name, flag, sum, mul, Person} from "./module1.js"

console.log('test3')

if(flag) {
  console.log('yes')
  console.log(sum(30, 40))
  console.log(name)
  console.log(mul(11, 22))
  const p = new Person('xiaolei', 19);
  p.run();
}