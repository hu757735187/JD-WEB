<template>
     <div class="cc">
         <div class="nav-tabs-justified">
             <div class="nav_wrap">

                 <div class="nav_top">
                     <div class="nav_top_one">
                         <a href="#"><img src="@/assets/img/cc/jing.png" /></a>
                     </div>
                     <div class="nav_top_two"><input type="text" /><button>搜索</button></div>
                     <div class="nav_top_three">
                         <div class="cw-icon">
                             <i class="ci-left"></i>
                             <i class="ci-right">&gt;</i><i class="ci-count">0</i>
                             <a href="javascript:;">我的购物车</a>
                         </div>

                         <div class="dorpdown-layer">
                             <div class="spacer"></div>
                             <div id="settleup-content">
                                 <div class="smt">
                                     <h4 class="fl">最新加入的商品</h4></div>
                                 <div class="smc">
                                     <ul id="mcart-sigle"></ul>
                                     <ul id="mcart-gift">
                                         <li>
                                             <div class="p-img fl">
                                                 <a href="javascript:;"><img src="img/shou.jpg" width="50" height="50" alt=""></a>
                                             </div>
                                             <div class="p-name fl">
                                                 <a href="javascript:;" title="OPPO R11s 全面屏双摄拍照手机 全网通4G+64G 双卡双待手机 红色">OPPO R11s 全面屏双摄拍照手机 全网通4G+64G 双卡双待手机 红色</a>
                                             </div>
                                             <div class="p-detail fr ar"> <span class="p-price"><strong>￥3199.00</strong>×1</span> <br>
                                                 <a class="delete" data-id="5638336" data-type="RemoveProduct" href="#delete">删除</a>
                                             </div>
                                             <div class="gift">
                                                 <a href="javascript:;">[赠品] 运动蓝牙耳机（颜色随机）</a>
                                             </div>
                                         </li>
                                     </ul>
                                 </div>
                                 <div class="smb ar">
                                     <div class="p-total">共<b>1</b>件商品　共计<strong>￥ 3199.00</strong></div>
                                     <a href="javascript:;" title="去购物车" id="btn-payforgoods">去购物车</a>
                                 </div>
                             </div>
                         </div>

                     </div>

                 </div>

                 <nav>
                     <div class="nav_min">

                         <div class="nav_down">
                             <ul class="nav_down_ul">
                                 <li class="nav_down_ul_1" style="width: 24%;float: left;">
                                     <a href="javascript:;">全部商品分类</a>

                                 </li>
                                 <li class="ul_li">
                                     <a href="javascript:;">服装城</a>
                                 </li>
                                 <li class="ul_li">
                                     <a href="javascript:;">美妆馆</a>
                                 </li>
                                 <li class="ul_li">
                                     <a href="javascript:;">超市</a>
                                 </li>
                                 <li class="ul_li" style="border-right: 1px solid lavender;">
                                     <a href="javascript:;">生鲜</a>
                                 </li>
                                 <li class="ul_li">
                                     <a href="javascript:;">全球购</a>
                                 </li>
                                 <li class="ul_li">
                                     <a href="javascript:;">闪购</a>
                                 </li>
                                 <li class="ul_li" style="border-right: 1px solid lavender;">
                                     <a href="javascript:;">拍卖</a>
                                 </li>
                                 <li class="ul_li">
                                     <a href="javascript:;">金融</a>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </nav>

             </div>

         </div>


     </div>
</template>

<script>
    export default {
        name: "cc_nav"
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none; }

    ol,
    ul {
        list-style: none; }

    a {
        text-decoration: none; }

    .alert-info {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: #e3e4e5;
        border-bottom: solid 1px #ddd; }
    .alert-info .hd_wrap_top {
        width: 1210px;
        background: #e3e4e5;
        color: #999;
        margin: 0 auto; }
    .alert-info .hd_wrap_top .hd_wrap_left {
        float: left; }
    .alert-info .hd_wrap_top .hd_wrap_left .hd_home {
        float: left;
        height: 30px;
        padding: 0 2px; }
    .alert-info .hd_wrap_top .hd_wrap_left .hd_home i {
        position: relative;
        display: inline;
        font-size: 16px;
        color: #5c5452;
        padding-right: 5px; }
    .alert-info .hd_wrap_top .hd_wrap_left .hd_home a {
        color: #999;
        text-decoration: none;
        display: inline-block;
        font-size: 12px; }
    .alert-info .hd_wrap_top .hd_wrap_left .hd_home a:hover {
        color: red; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown {
        z-index: 13;
        float: left; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dt {
        padding: 0 25px 0 10px;
        float: left; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dt i {
        color: #5C5452; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dt span {
        font-size: 12px;
        display: inline-block;
        cursor: pointer; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dt span:hover {
        color: red; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dd {
        width: 301px;
        padding: 10px 0 10px 10px;
        line-height: 24px;
        top: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-top: none;
        display: none;
        position: absolute;
        float: left;
        z-index: 999; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dd li {
        width: 55px;
        float: left;
        padding: 2px 0;
        display: list-item;
        text-align: -webkit-match-parent; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dd li a {
        height: 24px;
        text-decoration: none;
        color: #999999;
        font-size: 11px;
        text-align: center;
        line-height: 24px;
        padding: 0 8px;
        display: inline-block; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dd li .most {
        background: red;
        color: #fff; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dd li .most:hover {
        background: red;
        color: #fff; }
    .alert-info .hd_wrap_top .hd_wrap_left .dorpdown .dd li a:hover {
        color: red;
        background: #F5F5F5; }
    .alert-info .hd_wrap_top .hd_wrap_right {
        float: right; }
    .alert-info .hd_wrap_top .hd_wrap_right .forel {
        margin-right: 5px;
        height: 30px; }
    .alert-info .hd_wrap_top .hd_wrap_right .forel .link_login {
        font-family: "verdana,simsun";
        width: 72px;
        height: 14px;
        display: inline-block; }
    .alert-info .hd_wrap_top .hd_wrap_right .forel .link_regist {
        color: red;
        display: inline-block; }
    .alert-info .hd_wrap_top .hd_wrap_right .spacer {
        width: 1px;
        height: 12px;
        margin-top: 9px;
        padding: 0;
        background: #ccc;
        overflow: hidden;
        margin-left: 6px;
        margin-right: 6px;
        text-align: center;
        line-height: 12px; }
    .alert-info .hd_wrap_top .hd_wrap_right li {
        float: left;
        height: 30px; }
    .alert-info .hd_wrap_top .hd_wrap_right li a {
        width: 48px;
        height: 14px;
        display: inline-block;
        font-size: 12px;
        text-decoration: none;
        color: #999999; }
    .alert-info .hd_wrap_top .hd_wrap_right li a:hover {
        color: red; }
    .alert-info .hd_wrap_top .hd_wrap_right li span {
        width: 12px;
        height: 15px;
        display: inline-block;
        margin-left: 7px;
        font-size: 2px;
        color: #ccc;
        font-style: normal;
        font-weight: lighter; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj {
        border: 0;
        position: relative;
        top: 0; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol {
        width: 265px;
        padding: 5px 0 10px 10px;
        background: white;
        position: absolute;
        border: 1px solid #ddd;
        display: none;
        z-index: 999; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol li {
        width: 50%;
        height: 25px;
        border: 0;
        float: left;
        text-align: left;
        line-height: 30px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol li a {
        width: 100%; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol li:hover a {
        color: red; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol .hd_list_sp {
        width: 100%;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        border-top: 1px solid #f1f1f1; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol .hd_list_sp .sp {
        display: inline-block;
        width: 50px;
        float: left;
        font-weight: 600; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol .hd_list_sp .span1 {
        display: block;
        width: 50px;
        float: right; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol .hd_list_sp .span1:hover {
        color: red; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol div {
        width: 90%;
        margin: 0 auto; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_dj .hd_dj_ol div img {
        width: 20%;
        height: 40px;
        margin-left: 2%; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_kh {
        position: relative; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_kh .hd_kh_ol {
        width: 170px;
        border: 1px solid #ddd;
        margin-top: -2px;
        background: white;
        display: none;
        position: absolute;
        z-index: 999;
        top: 31px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_kh .hd_kh_ol h6 {
        width: 100%;
        text-align: left;
        padding-left: 10px;
        float: left;
        font-weight: 600;
        color: dimgray; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_kh .hd_kh_ol li {
        width: 50%;
        height: 25px;
        line-height: 25px;
        text-align: left; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_kh .hd_kh_ol li a {
        width: 100%;
        margin-left: 8px;
        display: inline-block;
        font-size: 11px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_kh .hd_kh_ol li:hover a {
        color: red; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang {
        position: relative; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh {
        width: 1210px;
        height: 188px;
        padding: 17px 0;
        position: absolute;
        left: -1057px;
        border: 1px solid #e3e4e5;
        border-top: none;
        display: none;
        background: #fff;
        z-index: 1000; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol {
        width: 1210px;
        height: 188px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol li {
        float: left;
        text-align: left;
        border-right: 1px solid #E3E4E5; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol li a:hover {
        color: #f30213; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_li {
        width: 366px;
        height: 150px;
        padding-left: 19px;
        padding-right: 0; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_li .tit {
        width: 100%;
        height: 28px;
        line-height: 28px;
        font-weight: bolder;
        color: #666666; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_li .item {
        width: 85px;
        height: 24px;
        line-height: 24px;
        float: left; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_li .item a {
        width: 100%;
        display: inline-block; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_l2,
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_l3 {
        width: 278px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_daohang .hd_dh .hd_ol .hd_l4 {
        width: 279px;
        border: none; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing {
        position: relative;
        border-left: 1px solid #e3e4e5;
        border-right: 1px solid #e3e4e5; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj {
        width: 192px;
        height: 310px;
        border: 1px solid #E3E4E5;
        border-top: none;
        border-bottom: 3px solid #666666;
        position: absolute;
        display: none;
        left: -127px;
        top: 30px;
        z-index: 1000;
        background: #fff; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list {
        width: 192px;
        height: 101px;
        padding: 15px 0;
        border-bottom: 1px solid #E3E4E5;
        float: left;
        text-align: left; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_img {
        width: 70px;
        height: 70px;
        float: left;
        margin: 0 5px;
        margin-left: 5px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt {
        width: 94px;
        height: 70px;
        float: left; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt p {
        margin-bottom: 0; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt .p1 {
        font-weight: bolder;
        color: #999;
        line-height: 17px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt .p1 a {
        width: 100%;
        display: inline-block; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt .p2 {
        line-height: 14px;
        color: #f30213;
        cursor: pointer;
        font-size: 12px;
        margin-top: 3px; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt .img1 {
        width: 81px;
        height: 24px;
        margin-top: 5px;
        float: left; }
    .alert-info .hd_wrap_top .hd_wrap_right .hd_jing .hd_jing_sj .hd_jing_list .hd_jing_dt .img2 {
        width: 58px;
        height: 25px;
        float: left; }

    .nav-tabs-justified {
        width: 1349px;
        border-bottom: 2px solid #f30213; }
    .nav-tabs-justified .nav_wrap {
        width: 1210px;
        margin: 0 auto; }
    .nav-tabs-justified .nav_wrap .nav_top {
        width: 100%;
        height: 87px;
        padding: 18px 0; }
    .nav-tabs-justified .nav_wrap .nav_top div {
        float: left; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_one {
        width: 134px;
        height: 50px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_one img {
        width: 100%;
        height: 100%; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_two {
        width: 594px;
        height: 40px;
        margin-top: 5px;
        padding: 4px;
        margin-left: 245px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_two input {
        width: 504px;
        height: 36px;
        float: left;
        border: 2px solid #F30213;
        outline: none; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_two button {
        width: 82px;
        height: 36px;
        font-size: 16px;
        border: 0;
        color: white;
        background: #F30213;
        float: left;
        outline: none; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three {
        float: left;
        height: 36px;
        margin-top: 9px;
        margin-left: 35px;
        width: 140px;
        height: 36px;
        border: 1px solid #DFDFDF;
        background: #F9F9F9;
        position: relative; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .cw-icon {
        width: 91px;
        height: 34px;
        padding: 0 28px 0 19px;
        background: #F9F9F9;
        line-height: 34px;
        position: relative;
        cursor: default;
        zoom: 1; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .cw-icon i {
        display: block;
        position: absolute;
        overflow: hidden; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .cw-icon .ci-left {
        top: 9px;
        left: 90px;
        width: 16px;
        height: 16px;
        background: url(//misc.360buyimg.com/jdf/1.0.0/unit/shoppingcart/5.0.0/i/settleup-@1x.png) no-repeat;
        background-size: 16px 16px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .cw-icon .ci-right {
        display: none;
        top: 13px;
        right: 12px;
        height: 10px;
        width: 10px;
        background: url(//misc.360buyimg.com/jdf/1.0.0/unit/shoppingcart/5.0.0/i/right-@1x.png) no-repeat;
        background-size: 10px 10px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .cw-icon .ci-count {
        width: auto !important;
        min-width: 16px !important;
        position: absolute;
        top: 8px;
        left: 106px;
        display: inline-block;
        padding: 1px;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: -1px;
        color: #fff;
        background-color: #da1026;
        border-radius: 7px;
        min-width: 14px;
        text-align: center; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .cw-icon a {
        color: #f30213;
        text-decoration: none;
        display: inline-block;
        font-size: 11px;
        width: 60px;
        height: 14px;
        line-height: 14px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer {
        display: none;
        position: absolute;
        width: 308px;
        height: 160px;
        top: 32px;
        right: 0;
        z-index: 55;
        background: #fff; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer .spacer {
        position: absolute;
        right: 0;
        top: -7px;
        width: 138px;
        height: 12px;
        background: #fff; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content {
        position: relative;
        z-index: 2;
        width: 100%;
        background: #fff; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smt {
        width: 308px;
        padding-top: 10px;
        height: 30px;
        margin-top: 5px;
        margin-left: 5px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smt .fl {
        float: left;
        font-size: 12px;
        font-weight: bold;
        color: #8C8C8C;
        margin: 0;
        padding: 0; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc:hover {
        background: #F5F5F5; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc {
        width: 100%;
        background: #fff;
        height: 86px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-sigle {
        margin-top: 0; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift {
        width: 308px;
        background: #F5F5F5; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li {
        line-height: 17px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-img {
        float: left;
        width: 50px;
        height: 50px;
        border: 1px solid #ddd;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 0; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-img a {
        color: #666;
        text-decoration: none;
        display: inline-block; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-name {
        float: left;
        width: 140px;
        height: 52px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-name a {
        color: #666;
        text-decoration: none;
        display: inline-block;
        font-size: 12px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-name a:hover {
        color: red; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-detail {
        float: right;
        text-align: right;
        overflow: hidden; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-detail .p-price {
        font-weight: 700; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-detail .p-price strong {
        font-weight: bold; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-detail .delete {
        color: #666;
        text-decoration: none;
        margin-right: 10px;
        display: inline-block; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .p-detail a:hover {
        color: red; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .gift {
        height: 17px;
        width: 282px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smc #mcart-gift li .gift a {
        color: #999;
        text-decoration: none;
        display: inline-block;
        margin-top: 1px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smb {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-top: 7px;
        background: #F5F5F5;
        overflow: hidden;
        text-align: right; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smb .p-total {
        float: left;
        line-height: 29px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smb .p-total b,
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smb .p-total strong {
        font-weight: bold; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer #settleup-content .smb a {
        float: right;
        height: 26px;
        padding: 0 5px;
        background: #E4393C;
        color: #fff;
        text-align: center;
        font-weight: 700;
        line-height: 26px;
        border-radius: 3px;
        text-decoration: none;
        margin-right: 15px;
        font-size: 13px; }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .dorpdown-layer:hover {
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three .nav_top_three:hover {
        border: none;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); }
    .nav-tabs-justified .nav_wrap .nav_top .nav_top_three:hover .dorpdown-layer {
        width: 308px;
        display: block; }
    .nav-tabs-justified .nav_wrap nav {
        width: 100%;
        margin: 0 auto; }
    .nav-tabs-justified .nav_wrap nav .nav_min {
        width: 1210px;
        margin: 0 auto; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down {
        width: 70%;
        height: 50px; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul {
        width: 100%;
        clear: both; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .ul_li {
        width: 9%;
        height: 20px;
        margin-top: 20px;
        line-height: 20px;
        float: left;
        text-align: center; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 {
        height: 35px;
        margin-top: 15px;
        line-height: 35px;
        text-align: center;
        background: #F30213; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 a {
        color: white;
        text-decoration: none; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 a:hover {
        color: white;
        text-decoration: none; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul a {
        color: black;
        text-decoration: none; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul a:hover {
        color: red; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 {
        position: relative; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 .nav_down_ul_ol {
        width: 203px;
        height: 500px;
        background: white;
        box-shadow: 0 0 5px darkgray;
        position: absolute;
        top: 35px;
        left: 0;
        z-index: 22;
        display: none; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 .nav_down_ul_ol .li-1 {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-indent: 1em;
        background: white;
        text-align: left; }
    .nav-tabs-justified .nav_wrap nav .nav_min .nav_down .nav_down_ul .nav_down_ul_1 .nav_down_ul_ol .li-1 #fen {
        width: 1023px;
        height: 500px;
        background: #F5F5F5;
        position: absolute;
        top: 2px;
        left: 203px;
        clear: both;
        display: none; }




</style>