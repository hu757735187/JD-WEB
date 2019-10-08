<template>
    <div class="nav-box">
        <nav>
            <!--登录的路由-->
            <router-link to="/login"></router-link>
            <!--主页面路由-->
          <!--  <router-link to="/home"></router-link>-->
            <!--修改密码界面-->
            <router-link to="/updatePage"></router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Nav",
    }
</script>

<style lang="stylus" scoped>



</style>