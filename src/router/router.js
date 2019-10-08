import Vue from "vue";
import Router from "vue-router";
import Login from "../views/login";
import Home from "../views/Home";
import Error from "../views/error";
import InHome from "../views/pages/inHome";
import Mine from "../views/pages/mine";
import Order from "../views/pages/order";
import Shop from "../views/pages/shop";
import UpdatePage from "../views/updatePage"

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
      children:[
        {
          path: "/mine",
          component:Mine
        },
        {
          path: "/order",
          component:Order
        },
        {
          path: "/shop",
          component: Shop
        },
        {
          path: "/inHome",
          component: InHome
        },
      ]
    },
    {
      path:"/updatePage",
      component:UpdatePage
    },
    {
      path: "**",
      component: Error
    },
  ]
});
