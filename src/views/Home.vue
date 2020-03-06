<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转parent</button>
    <button @click="handleClick('replace')">跳转info</button>
    <b>{{food}}</b>
      <button @click="getInfo" :style={background:coloers}>请求数据</button>
      <button @click="updateInfo">请求修改数据</button>

      <p>{{homeName}}</p>
      <p>{{supNameVersion}}</p>
     <p>mockHomeName:{{mockHomeName}}</p>
      <img src="url"/>

      <p>food:{{mockfood}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUserInfo,getUserName,getSupHomeName} from "../api/user";  //{getUserInfo} es6 结构赋值
/*import axios from 'axios'*/
import {updateSupName} from "../api/home";

import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
    data () {
      return {
          url:'',
          coloers: '',
          mockfood: ''
      }
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
    computed: {
      ...mapState({
          homeName: state => state.home.homeName,
          mockHomeName: state => state.home.mockHomeName
      }),
        /*获取getters里面的数据 两种方式*/
        /* ...mapGetters([
          'supNameVersion'
      ]),*/

      supNameVersion () {
          return this.$store.getters.supNameVersion
      }
    },
  methods: {
    ...mapMutations([
        'SET_SUP_NAME'
    ]),
    ...mapActions([
        'updateHomeName',
        'updateMockHomeName'
    ]),
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
        this.$router.replace({
          name: 'info'
        })
      }
    },
      getInfo () {
       /* axios.post('/getUserInfo',{userId:21}).then(res => {
            console.log(res)
        })*/

        getUserInfo({userId:21}).then(res => {
            console.log(res)
        })

        /*getUserName({Id:22}).then(res => {
            console.log('res:'+JSON.stringify(res))
            //this.userName = 'admin1'
        })*/

          getSupHomeName().then(res => {
              //const sup_home_name = JSON.stringify(res)
              console.log(res)
              this.SET_SUP_NAME({homeName:res.data.data.userName})
              //console.log(res.data.data.userName)
          })
      },
      updateInfo () {
          updateSupName().then( res => {
              console.log(res.data)
              //console.log(res.data.supName)
              /**
               * 1.this.$store.dispatch 触发一个actions
               * 2.mutations 与 ations 的区别
               *   2.1 mutations 是同步请求操作state状太，而 actions是异步请求操作 state
               *   2.2 只能通过actions commis 一个mutations
               *   2.3 actions 和 mutations 都可以操作state
               *
               */
              this.$store.dispatch('updateHomeName',{homeName:res.data.supName})
              this.$store.dispatch('updateMockHomeName',{mockHomeName:res.data[0].mockhomeName})
              this.url = res.data[0].img
              this.coloers = res.data[0].coloers
              this.mockfood = res.data[1].food
          })

      }
  }
}
</script>
