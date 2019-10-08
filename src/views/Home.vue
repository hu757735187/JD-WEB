<template>
  <div class="home">
      <router-link to="/mine">我的</router-link>
      <router-link to="/inHome">首页</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/shop">商品</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="stylus" scoped>


</style>
