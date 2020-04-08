// ES6 导出默认对象
export default {
  template: `<div>
  <h2>{{message}}</h2>
  <button @click="btnClick">{{name}}</button>
</div>`,
  data() {
    return {
      message: 'hello world',
      name: 'lchkid'
    }
  },
  methods: {
    btnClick() {
      console.log('import')
    }
  }
}