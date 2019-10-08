<template>
  <div class="home">

      <router-link to="/inHome">首页</router-link>
      <router-link to="/cc">商品分类</router-link>
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
