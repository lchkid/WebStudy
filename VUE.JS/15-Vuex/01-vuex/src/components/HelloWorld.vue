<template>
  <div>
    <h1>------HelloWorld------</h1>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.get15Stu}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
