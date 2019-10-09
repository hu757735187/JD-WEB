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
                        <div>
                            <span><input type="checkbox"  class="allCheck"></span>
                            <span>京东自营</span>
                        </div>
<!--                        <div><img src="@assets/img/shoppingcart/i.png" alt=""></div>-->
                        <div><span>以免运费</span></div>
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
        border 1px solid red
        .onebdy_box
            width 1000px
            height 100%
            margin 0 auto
            border 1px solid pink
        .one_shoptop
            height 42px
            background #f3f3f3
            border 1px solid #e9e9e9
            clear left
            line-height 15px
            color #666666
            .one_shoptop_ul li
                float left
                font-size small
            .one_shoptop_ul li:first-child
                padding 0px
            .one_shoptop_ul li:nth-child(2)
                margin-left 85px
            .one_shoptop_ul li:nth-child(3)
                margin-left 420px
            .one_shoptop_ul li:nth-child(4)
                margin-left 70px
            .one_shoptop_ul li:nth-child(5)
                margin-left 50px
            .one_shoptop_ul li:last-child
                margin-left 70px
        .one_shopbottom
            border-bottom 2px solid #aaaaaa
            height 60px
            font-size small
            color #555555
        .one_shopbottom>div
            float left
            margin-top 30px
            width 333px
            height 30px
            line-height 30px
            margin-left 40px
</style>