<template>
      <div class="test">
          <button @click="test">测试</button>
          <h2>{{hhh.id}}</h2>
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
                    url:'102.html'
                }).then(res =>{
                    this.hhh = res
                    console.log(this.hhh);
                })
            }
        },
    created() {
        console.log("uuu");
    }
    }

</script>

<style scoped>

</style>