<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
    <p>{{food}}</p>
  </div>

</template>
<script>
  import store from '@/store'
 export  default {
   name :'About',
   store,
   data(){
     return{
        msg:store.state.count
     }
   },
   props:{
     food:{
       type:String,
       default:'apple'
     }
   }
 }
</script>
