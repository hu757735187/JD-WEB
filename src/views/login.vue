<template>
    <div class="login-box">
        <div class="container">
            <div class="error-message">
                {{errorInfo}}
            </div>
            <el-form ref="form" :model="login" :rules="rules" label-width="80px" class="login-form">
                <el-form-item label="用户名" prop="username">
                    <el-input class="input-na"  type="text" placeholder="请输入账号" v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="login.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onsubmit('form')">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="toUpdatePs">
                <a class="a-font" @click="toUpdatePage()">忘记密码了?修改密码</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            var checkUsername = (rule,value,callback) =>{
                if (value === '') {
                    callback(new Error('请输入账号'));
                }else if (value.length < 5 || value.length > 15){
                    callback(new Error('长度在5到15个字符'))
                }else{
                    callback()
                }
            };
            var checkPassword = (rule,value,callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value.length < 5 || value.length > 18){
                    callback(new Error('长度在5 到 18个字符'))
                }else{
                    callback()
                }
            };

            return {
              errorInfo:'',
              login:{
                  username:'',
                  password:''

              },
              rules:{
                  username: [
                      { validator: checkUsername, trigger: 'blur' },
                  ],
                  password: [
                      { validator: checkPassword, trigger: 'blur' },
                  ],
              }
            }
        },
        methods:{
            onsubmit(form){
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        if(this.login.username === "123456" && this.login.password ==="123456"){
                            this.$router.push("/home")
                        }else{
                            this.errorInfo = "账号或密码错误"
                        }
                    } else {
                        return false;
                    }
                });
            },
            toUpdatePage(){
                this.$router.push("/updatePage")
            }
        }
    }
</script>
<style lang="stylus" scoped>

</style>
