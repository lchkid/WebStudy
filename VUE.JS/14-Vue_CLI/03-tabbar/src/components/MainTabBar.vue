<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/home.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/home_active.png" alt="">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/category.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/category_active.png" alt="">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/cart.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/cart_active.png" alt="">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/profile.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/profile_active.png" alt="">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>