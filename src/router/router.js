import Vue from "vue";
import Router from "vue-router";
import Login from "../views/login";
import Home from "../views/Home";
import Error from "../views/error";
import UpdatePage from "../views/updatePage"
import CommodityClassification from "../views/CommodityClassification";
import AddToCart from "../views/AddToCart";
import ShoppingCart from "../views/pages/ShoppingCart";
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      component:Login
    },
    {
      path:"/login",
      component:Login
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path:"/updatePage",
      component:UpdatePage
    },
      {
          /*商品分类*/
          path:'/cc',
          component:CommodityClassification,
      },
      {
          /* 加入购物车*/
          path:'/atc',
          component:AddToCart
      },
    {
       /*购物车*/
      path:'/sc',
      component:ShoppingCart

    },
    {
      path: "**",
      component: Error
    },

  ]
});
