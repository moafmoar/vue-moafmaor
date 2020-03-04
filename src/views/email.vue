<template>
    <div class="email">
        email: cao_manman@126.com
        <button @click="handleClick">按我</button>
    </div>
</template>

<script>
    export default {
        name: "email",
        methods: {
            handleClick () {
                this.$bus.$emit('on-click','hello')  /*$emit 触发当前实例上的一些事情，并传递参数*/
            }
        },
        mounted() {
            console.log(this.$bus)
        }
    }
</script>

<style scoped>
 .email{
     border: 1px solid green;
 }
</style>
