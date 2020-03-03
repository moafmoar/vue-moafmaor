<template>
    <div>

        <!--$route 当前路由对象
        {{$route.params.name}}
        -->

        <div>
            {{name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "argu",
        props:{
            name:{
                type:String,
                default: 'moafmoar'
            }
        },
        /*组件内路由，路有发生变化，路由被复用的时候调用*/
        beforeRouteUpdate (to,from,next) {
          console.log(to.name,from.name)
            next()
        }
    }
</script>

<style scoped>

</style>
