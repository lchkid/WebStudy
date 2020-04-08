<template>
  <div id="app">
    <h1>------app------</h1>
    <h1>------state------</h1>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.students}}</h2>
    <h1>------mutations------</h1>
    <button @click="$store.commit('increment')">+</button>
    <button @click="$store.commit('decrement')">-</button>
    <button @click="countAdd(5)">+5</button>
    <button @click="studentAdd">+stu</button>
    <h1>------getters------</h1>
    <h2>{{$store.getters.get15Stu}}</h2>
    <h2>{{$store.getters.get15StuLen}}</h2>
    <h2>{{$store.getters.getAgeStu(12)}}</h2>
    <h1>------actions------</h1>
    <button @click="infoUpdate">修改信息</button>
    <h2>{{$store.state.info}}</h2>
    <h1>------modules------</h1>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.state.b.age}}</h2>
    <button @click="updateName">改变名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="aUpdateName">异步改变名字</button>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    stClick() {
      console.log(this.$store)
    },
    countAdd(n) {
      this.$store.commit('countAdd', n)
    },
    studentAdd() {
      // this.$store.commit('studentAdd', {id: 116, name: 'lchkiddo', age: 19})
      this.$store.commit({
        type: 'studentAdd',
        stu: {id: 116, name: 'lchkiddo', age: 19}
      })
    },
    infoUpdate() {
      this.$store.dispatch('aInfoUpdate', '我是payload').then(p => console.log(p))
    },
    updateName() {
      this.$store.commit('updateName', 'kidkid')
    },
    aUpdateName() {
      this.$store.dispatch('aUpdateName', 'async')
    }
  }
}
</script>

<style>

</style>
