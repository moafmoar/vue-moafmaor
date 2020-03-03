<template>
   <button type="button" @click="add()">添加</button>
</template>

<script>
    import store from '@/store'
    export default {
        name: "info",
        store,
        methods:{
            add(){
                console.log(" this is info.vue!!")
               store.commit('countchange')

            }
        }
    }
</script>

<style scoped>

</style>
