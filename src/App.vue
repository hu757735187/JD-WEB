<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <!--路由提示区-->
        <Nav></Nav>
      </div>
      <div class="row1">
        <!--路由展示区，要有路由展示区才能看到路由-->
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from 'components/common/Nav'
  export default {
    components:{
      Nav
    }
  }
</script>
<style lang="stylus" scoped>
  @import "assets/css/normalize.css"

</style>
