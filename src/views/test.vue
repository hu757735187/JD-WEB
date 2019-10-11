<template>
      <div class="test">
          <button @click="test">测试</button>
          <h2>{{hhh}}</h2>
      </div>
</template>

<script>
import {request} from "../network/request";

export default {
        name: "test",
        data(){
            return{
          hhh:''
            }
        },
        methods:{
            test(){
                request({
                    url:'user'
                }).then(res =>{
                    this.hhh = res
                    console.log('hhh');
                })
            }
        }
    }

</script>

<style scoped>

</style>