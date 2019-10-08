const path = require('path')

module.exports = {
    // //打包修改的配置
    // baseUrl:'./',
    // outputDir:'dist',
    //1.给路径取别名
    chainWebpack:config => {
        config.resolve.alias.set('components',path.resolve(__dirname,'./src/components'))
            .set('styles',path.resolve(__dirname,'./src/assets/styles'))
            .set('router',path.resolve(__dirname,'./src/router'))
            .set('views',path.resolve(__dirname,'./src/views'))
            .set('utils',path.resolve(__dirname,'./src/utils'))
    },

    //2.设置端口号
    devServer:{
        port:8081,
        open:true,
        // proxy: {
        //     "/api":{
        //         target:"http://localhost:8888",     //代理地址
        //         changeOrigin: true,     //是否跨域
        //         pathRewrite:{
        //             "^/api":""
        //         }
        //     }
        // }
    },


}