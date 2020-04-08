<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <a href="javascript:;">baidu</a>
    <router-link to="/about">关于</router-link>
    <router-link :to="`/user/${userid}`">用户</router-link>
    <router-link :to="pathobj">档案</router-link>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <h6>powerd by vscode</h6>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'lch',
      pathobj: {
        path: '/profile',
        query: {
          name: 'kid',
          age: 18,
          height: 1.88
        }
      },
    }
  },
  methods: {
    // homeClick() {
    //   this.$router.push('/home').catch(err => {err})
    // },
    // aboutClick() {
    //   this.$router.push('/about').catch(err => {err})
    // },
    userClick() {
      this.$router.push(`/user/${this.userid}`).catch(err => {err})
    },
    profileClick() {
      this.$router.push(this.pathobj).catch(err => {err})
    }
  }
}
</script>

<style>
  .router-link-active {
    color: #ff99ff
  }
  a[href^="/"] {
    margin-right: 10px;
  }
</style>
