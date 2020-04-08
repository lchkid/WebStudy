<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: '#ff0000'
    }
  },
  methods: {
    itemClick() {
      this.isActive ? null : this.$router.replace(this.link);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.link)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
</style>