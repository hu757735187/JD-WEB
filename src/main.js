import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/router";
import axios from "axios"

//引入阿里图标
import './assets/img/login/icon/iconfont.css'
import './assets/img/home/icon/iconfont.css'
//引入rem.js
// import 'utils/rem.js'
Vue.prototype.$axios = axios
Vue.use(ElementUI);

new Vue({
  router, //注册路由
  store,
  render: h => h(App)   //初始化
}).$mount("#app");
