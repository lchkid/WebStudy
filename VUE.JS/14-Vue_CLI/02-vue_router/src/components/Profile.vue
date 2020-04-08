<template>
  <div>
    <h1>我是profile</h1>
    <p>我也是profile</p>
    <h2 v-for="(item, key) in $route.query" :key="item">{{key}}:{{item}}</h2>
    <h2>{{$route.path}}</h2>
    <!-- <button @click="btnClick">route</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    // btnClick() {
    //   console.log(this.$router)
    //   console.log(this.$route)
    // }
  }
}
</script>

<style>

</style>