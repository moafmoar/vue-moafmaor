<template>
   <div>
      <count-to ref="countTo" :end-val="endVal" @on-animation-end = "handleEnd">
         <span slot="left">总金额：</span>
         <span slot="right">元</span>
      </count-to>
      <p>{{changeDate}}</p>
      <button @click="getNumber">获取金额</button>
      <button @click="updateVal">获取金额</button>
   </div>
</template>

<script>
    import CountTo from '../components/count-to'
    export default {
        name: "count_to",
        components: {
            CountTo
        },
       data () {
           return {
              endVal: 100,
              changeDate: 0
           }
       },
       methods: {
           getNumber () {
              this.changeDate = this.$refs.countTo.getCount()
           },
          updateVal () {
              this.endVal += Math.random()*100
          },
          handleEnd (endVal) {
              console.log("endVal===>"+endVal)
          }
       }
    }
</script>

<style scoped>

</style>
