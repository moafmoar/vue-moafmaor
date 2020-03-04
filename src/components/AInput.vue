<template>
    <input @input="handleInput" :value="value"/>
</template>
//父子附件调用之间传参
<script>
    export default {
        name: "AInput",
        props: {
            value: {
                type: [String,Number],
                default: ''
            }
        },
        methods: {
            handleInput (event) {
                const value = event.target.value
                this.$emit('input',value) /*$emit 触发input 函数，将value作为回调函数的参数*/
            }
        }
    }
</script>

<style scoped>

</style>
