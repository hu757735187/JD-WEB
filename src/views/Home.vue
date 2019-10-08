<template>
  <div class="home">
     <header_head></header_head>
      <router-view></router-view>
  </div>
</template>

<script>
    import header_head from "../components/common/header_head";
export default {
  name: "home",
    components: {
      header_head
    },
};
</script>

<style lang="stylus" scoped>


</style>
