<template>
      <div class="cc-boc">
          商品分类
          <router-link to="/atc">加入购物车</router-link>
      </div>
</template>

<script>
    import AddToCart from "./AddToCart";
    export default {
        name: "CommodityClassification",
        comments:{
            AddToCart
        }
    }
</script>

<style scoped>

</style>