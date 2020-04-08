<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">{{name}}</button>
  </div>
</template>

<script>
export default {
  name: 'cpn',
  data() {
    return {
      message: 'hello world',
      name: 'lchkid'
    }
  },
  methods: {
    btnClick() {
      console.log('vue')
    }
  }
}
</script>

<style>
  .title {
    color: green;
  }
</style>