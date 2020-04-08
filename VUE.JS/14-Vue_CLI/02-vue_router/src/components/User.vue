<template>
  <div>
    <h1>我是user</h1>
    <p>我也是user</p>
    <h1>{{$route.params.userId}}</h1>
    <!-- <button @click="btnClick">route</button> -->
  </div>
</template>

<script>
export default {
  name: 'user',
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