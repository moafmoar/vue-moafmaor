<template>
    <div class="tel">
        tel : 17629001026
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "tel",
        data () {
            return {
                message: ''
            }
        },
        mounted() {
            this.$bus.$on('on-click',mes => {  /*$on 给当前实例绑定事件监听*/
                this.message = mes
            })
        }
    }
</script>

<style scoped>
   .tel{
       border: 1px solid red;
   }
</style>
