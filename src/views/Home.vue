<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转parent</button>
    <button @click="handleClick('replace')">跳转parent</button>
    <b>{{food}}</b>
      <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUserInfo,getUserName} from "../api/user";  //{getUserInfo} es6 结构赋值
/*import axios from 'axios'*/


export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  props:{
    food:{
      type:String,
      default:'apple'
    }
  },
  /*组件内的守卫  这个是不能使用this的 在next(vm) vm就是当前的路由对象*/
  beforeRouteEnter (to,from,next) {
    //console.log(to)
    next(vm => {
      console.log(vm)
    })
  },
  /* 当用户在某个页面做了修改的操作，但是修改的内容没有保存的时候提醒用户 是否真的要离开，即将离开该页面的时候调用*/
  beforeRouteLeave (to,from,next) {
   const leave = confirm('您确认要离开此页面吗？')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick(type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        const name = 'moafmoar'
        this.$router.push({
         /* name: 'argu',
          params:{
            name:'moafmoar'
          }*/
          /*
          name:'parent',
          query:{
            name:'moafmoar'
          }*/
          /** ES6 模板语法**/
          path:`/argu/${name}`,
        })
      } else if (type === 'replace') {
        this.$router.push({
          name: 'info'
        })
      }
    },
      getInfo () {
        /*axios.post('/getUserInfo',{userId:21}).then(res => {
            console.log(res)
        })*/

        getUserInfo({userId:21}).then(res => {
            console.log('res:'+JSON.stringify(res))
        })
        getUserName({Id:22}).then(res => {
            console.log('res:'+JSON.stringify(res))
        })
      }
  }
}
</script>
