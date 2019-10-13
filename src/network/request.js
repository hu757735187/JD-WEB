//使用拦截器
import axios from 'axios'
export function request(config) {
    /*1.创建axios的实例*/
    const instance  = axios.create({
       baseURL: 'http://127.0.0.1:8080',
        timeout: 5000,
        method:"post"
    })
   //2.asios的拦截器
    //asios.interceptors 拦截全局的
    //instance.interceptors 只拦截当前实例
    //instance.interceptors.request 拦截请求
    //instance.interceptors.response 拦截响应的
    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    },err => {
        console.log(err);
    })
    //响应拦截
    instance.interceptors.response.use(res =>{
        return res.data
    },error => {
        console.log(err);
    })
    return instance(config)
}
