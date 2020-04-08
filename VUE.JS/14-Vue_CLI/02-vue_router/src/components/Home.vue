<template>
  <div>
    <h1>我是home</h1>
    <p>我也是home</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <!-- <button @click="btnClick">route</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      path: '/home/news'
    }
  },
  methods: {
    // btnClick() {
    //   console.log(this.$router)
    //   console.log(this.$route)
    // }
  },
  created() {
    console.log('created');
    console.log(this.path);
  },
  activated() {
    // console.log('activated');
    // console.log(this.path);
    this.$router.push(this.path).catch(err => {err})
  },
  // destroyed() {
  //   console.log('destroyed');
  //   console.log(this.path);
  // },
  beforeRouteLeave(to, from, next) {
    // console.log('beforeRouteLeave');
    this.path = this.$route.path;
    // console.log(this.path);
    next();
  }
}
</script>

<style>

</style>