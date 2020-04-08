<template>
  <div id="app">
    <ul>
      <li v-for="item in artist" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { request } from "./network/request";

export default {
  name: "App",
  data() {
    return {
      artist: ""
    };
  },
  components: {},
  created() {
    request({
      url: "/artist/list",
      params: {
        cat: 1001,
        initial: "l"
      }
    }).then(res => {
      // console.log(res)
      this.artist = res.artists;
    });
  }
};
</script>

<style>
</style>
