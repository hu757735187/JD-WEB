<template>
     <div class="sc">
        <header_head1></header_head1>
         <body>
         <div class="one_search">
             <div class="one_sousuo">
                 <div class="one_search_top">
                     <div class="one_top_left">
                         <a href="../京东首页\JD.html" class="one_left_logo">
                             <img src="@/assets/img/shoppingcart/logo.png">
                         </a>
                         <a href="#" class="one_left_link">购物车</a>
                     </div>
                     <div class="one_top_right">
                         <input type="text" class="one_right_txt" placeholder="自营" onfocus="this.placeholder=''"  onblur="this.placeholder='自营' ">
                         <input type="button" value="搜索" class="one_right_btn">
                     </div>
                 </div>
                 <div class="one_search_load">
                     <img src="@/assets/img/shoppingcart/shop_07.jpg" class="one_load_wraing">
                     <span class="one_load_title">您还没有登录！登录后购物车的商品将保存到您账号中</span>
                     <a href="#">
                         <input type="button" value="立即登录" class="one_load_btn">
                     </a>
                 </div>
             </div>
         </div>
         <div class="one_bdyshop">

             <div class="onebdy_box">

                <div class="one_tabtop">

                    <div class="one_topleft">
                        <span>全部商品</span>
                    </div>
                    <div class="one_topright">
                        <span>配送至：</span>
                        <span>

                        </span>
                    </div>


                 <div class="one_shop">
                    <div class="one_shoptop">
                        <ul class="one_shoptop_ul">
                            <li><input type="checkbox" class="allcheck">全选</li>
                            <li>商品</li>
                            <li>单价</li>
                            <li>数量</li>
                            <li>小计</li>
                            <li>操作</li>
                        </ul>
                    </div>

                        <div class="one_shopbottom">
                            <div class="one_shopbottom_a">
                                <span><input type="checkbox"  class="allcheck"></span>
                                <div class="one_shopbottom_b">
                                    <span>京东自营</span>
                                </div>
                            </div>
    <!--                        <div class="one_shopbottom_div">-->
    <!--                            <img src="@/assets/img/shoppingcart/i.png" alt="">-->
    <!--                            <span>已免运费</span>-->
    <!--                        </div>-->
                        </div>
                        <div class="one_shopcon">
                            <div class="one_shopcon_a">
                                <span><input type="checkbox" class="allcheck"></span>
                            </div>
                            <div class="one_shopcon_b">
                                <div class="one_shopcon_tp">
                                    <a href=""><img src="@/assets/img/shoppingcart/shop1.jpg"></a>
                                </div>
                                <div class="one_shopcon_xh">
                                    <span class="one_shopcon_xh_s1">Apple iPhone 11(A2223)256GB 黄色 移动联通电信4G手机 双卡双待</span>
                                </div>
                                <div class="one_shopcon_ys" title="黄色">
                                    黄色
                                </div>
                                <div class="one_shopcon_nc" title="256GB">
                                    256GB
                                </div>
                                <div class="one_shopcon_jg">
                                    ¥6799.00
                                </div>
                                <div class="one_shopcon_js">
                                    <div class="box">
                                        <ul id="car">
                                            <li><button v-on:click="subtract()">-</button></li>
                                            <li><input type="text" value="0" size="1" v-model="count"></li>
                                            <li><button v-on:click="add()">+</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="one_shopcon_xj">
                                    ¥6799.00
                                </div>
                                <div class="one_shopcon_remove" >
                                    <span>删除</span>
                                </div>
                                <div class="one_shopcon_follow">
                                    移动到我的关注
                                </div>
                            </div>
                        </div>
                  </div>

                </div>
             </div>
         </div>
         </body>
     </div>
</template>

<script>
    import header_head1 from "../../components/common/header_head1";
    export default {
        name: "ShoppingCart",
        // data(){
        //     return {
        //         mms:"京东自营"
        //     }
        // },
        components: {
            header_head1
        },

    }
</script>

<style lang="stylus" scoped>
    .one_search
        position:absolute
        width: 100%
        height: 120px
        margin-bottom: 30px
        margin-top: 30px

        .one_sousuo
            width: 1000px
            height: 120px
            margin: 0 auto

            .one_search_top
                width: 1000px
                height: 107px

                .one_top_left
                    position absolute
                    float: left
                    padding-top: 30px

                    .one_left_logo
                        margin-left: 15px
                    .one_left_link
                        position absolute
                        width 60px
                        height 50px
                        margin-left 15px
                        margin-top 20px
                        font-weight: bold
                        font-size:20px
                        text-decoration none
                        color #555555
                        display: inline-block

                .one_top_right
                    float: right
                    width: 326px
                    height: 28px !important
                    border: 2px solid #c91623
                    margin-top: 40px

                    .one_top_right input::-webkit-input-placeholder
                        color: #999
                        font-size: 12px


                    .one_right_txt
                        float: left
                        width: 270px
                        height: 24px
                        border: none
                        outline: none


                    .one_right_btn
                        float right
                        margin-right 0px
                        width: 55px
                        height: 28px
                        color: #fff
                        border: none
                        background: #c91623
                        outline: none
                        cursor: pointer
            .one_search_load
                width: 980px
                height: 48px
                border: 1px solid #edd28b
                line-height: 46px
                padding-left: 20px
                background: #fffdee

                .one_load_title
                    font-size 15px
                    color #FFBE4A

                .one_load_wraing
                    margin-right: 14px

                .one_load_btn
                    margin-left 30px
                    border: none
                    background: none
                    width: 70px
                    height: 30px
                    background: #e1383b
                    color:#fff
                    cursor: pointer
                    border-radius: 4px
                    outline: none
                    font-size 12px
                    text-align center
                    line-height 30px




    .one_bdyshop
        position:absolute
        top 240px
        width 100%
        height 500px

        .onebdy_box
            width 1000px
            height 100%
            margin 0 auto
            border 1px solid pink
            .one_shop
                 position relative
                 width 1000px
                 height 269px
                 border 1px solid red
                .one_shoptop
                    height 42px
                    background #f3f3f3
                    border 1px solid #e9e9e9
                    clear left
                    line-height 15px
                    color #666666
                    .one_shoptop_ul
                        position:absolute
                        left -32px
                    .one_shoptop_ul li
                        float left
                        font-size small
                    .one_shoptop_ul li:first-child
                        padding 0px
                    .one_shoptop_ul li:nth-child(2)
                        margin-left 85px
                    .one_shoptop_ul li:nth-child(3)
                        margin-left 440px
                    .one_shoptop_ul li:nth-child(4)
                        margin-left 90px
                    .one_shoptop_ul li:nth-child(5)
                        margin-left 70px
                    .one_shoptop_ul li:last-child
                        margin-left 90px

                .one_shopbottom
                    border-bottom 2px solid #aaaaaa
                    height 45px
                    font-size small
                    color #555555
                /*.one_shopbottom_div*/
                /*    position:relative*/
                /*    float left*/
                /*    left  540px*/
                .one_shopbottom_a
                    position relative
                    top 24px
                    left 8px
                    float left
                    width 80px
                    height 20px
                    .one_shopbottom_b
                        float right
                        padding 0 3px
                        color white
                        border-radius 3px
                        background #E4393B
                .one_shopcon
                    width 990px
                    height 141px
                    border 1px solid green
                    .one_shopcon_a
                        position relative
                        top 10px
                        left 7px
                    .one_shopcon_b
                        position relative
                        left 40px
                        top -10px
                        width 948px
                        height 107px
                        border 1px solid gold
                        font-size 13px
                        .one_shopcon_tp
                            width 80px
                            height 80px
                            border 1px solid #EEEEEE
                        .one_shopcon_xh
                            position absolute
                            left 95px
                            top 5px
                            font-size 13px
                            width 215px
                            height 36px
                            color #333333
                            .one_shopcon_xh_s1:hover
                                color red
                                cursor:pointer
                        .one_shopcon_ys
                            position absolute
                            width 130px
                            height 20px
                            top 5px
                            color #666666
                            left 330px
                            cursor: default

                        .one_shopcon_nc
                            position absolute
                            width 130px
                            height 20px
                            top 23px
                            color #666666
                            left 330px
                            cursor: default
                        .one_shopcon_jg
                            position absolute
                            width 130px
                            height 20px
                            top 10px
                            color #666666
                            left 545px
                            cursor pointer

                        .one_shopcon_js
                            position absolute
                            top -5px
                            left 610px
                            cursor pointer
                            .box ul,li
                                list-style none
                                li
                                    float left
                                input
                                    text-align center
                        .one_shopcon_xj
                            position absolute
                            width 100px
                            height 20px
                            top 10px
                            font-weight bold
                            color #333333
                            left 750px
                        .one_shopcon_remove
                            position absolute
                            width 75px
                            height 20px
                            left 885px
                            top 5px
                            color #666666
                            cursor pointer




                        .one_shopcon_follow
                            position absolute
                            width 75px
                            height 20px
                            left 885px
                            top 25px
                            color #666666
                            cursor pointer
</style>
