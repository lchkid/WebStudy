<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 3px rgba(90, 90, 90, 0.08);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>