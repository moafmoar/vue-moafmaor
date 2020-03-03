<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-bind:to="{name:'About'}">About</router-link> |
      <router-link to="/info"> info</router-link>
    </div>
    <!--视图动画渲染 多个 router-view 的时候使用 transition-group 如果一个router-view，使用一个transition-->
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routerTransition: ''
      }
    },
    watch: {
      '$router' (to) {
        to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
      }
    }
  }
</script>

<style lang="less">
  //组件即将加载时候的状态
  .router-enter{
     opacity: 0;
  }
  //组件从没有到有的过程的动态效果
  .router-enter-active{
     transition: opacity 1s ease;
  }
  //
  .router-enter-to{
    opacity: 1;
  }

  //组件即将加载时候的状态
  .router-leave{
    opacity: 1;
  }
  //组件从没有到有的过程的动态效果
  .router-leave-active{
    transition: opacity 1s ease;
  }
  //
  .router-leave-to{
    opacity: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
