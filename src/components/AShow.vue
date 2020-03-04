<template>
    <div>
       <p>AShow: {{content}}</p>
    </div>
</template>
//兄弟组件之间调用传参
<script>
    export default {
        name: "AShow",
        props: {
            content: {
                type: [String,Number],
                default: ''
            }
        }
    }
</script>

<style scoped>

</style>
