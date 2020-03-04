<template>
   <div>
       <!--双向绑定-->
       stateValue:<a-input v-model="stateValue" />
       <!--<a-input :value="stateValue" @input="handleStateValueChange"/>-->
       <p>{{stateValue}}</p>
       inputValue:<a-input v-model="inputValue"/>
       <a-input @input="handleInput"/>
       <p>inputValue:{{inputValue}} ----> lastLetter is {{ inputValueLaseLetter }}</p>
       <a-show :content="inputValue"/>
       <p>appName:{{appName}},appNameWithVersion {{appNameWithVersion}}</p>
       <p>userName:{{userName}},firstLatterName is :{{firstLetter}}</p>

       <button @click="handleChangeAppName">修改appName</button>
       <p>{{appVersion}}</p>
       <button @click="changeUserName">修改用户名</button>
       <button @click="registerMoudle">动态注册模块</button>
       <p v-for="(li,index) in todoList" :key="index">{{li}}</p>
   </div>
</template>

<script>
    import AInput from "../components/AInput";
    import AShow from "../components/AShow";
    import { mapState,mapGetters ,mapMutations,mapActions} from 'vuex'
    /*模块使用了命名空间的时候使用这种方式加载 mapState \mapGetters 这个是在user模块里面使用了 命名空间为true*/
    /*
    import  { createNamespacedHelpers } from 'vuex'
    const { mapState } = createNamespacedHelpers('user')*/


    /*import  { createNamespacedHelpers } from 'vuex'
    const { mapGetters } = createNamespacedHelpers('user')*/


    export default {
        name: "store",
        data () {
            return {
                inputValue: ''
            }
        },
        components: {
            AInput,
            AShow
        },
        /*computed 计算属性*/
        computed: {
            ...mapState({
                userName: state => state.user.userName,
                appVersion: state => state.appVersion,
                todoList: state =>  state.user.todo ? state.user.todo.todoList:[],
                /*stateValue: state => state.stateValue*/  /* 双向绑定*/
            }),
            /*通过传入数组的方式获取 getters里面的属性值*/
            ...mapGetters([
                'appNameWithVersion',
                'firstLetter'
            ]),

            /* 双向绑定*/
            stateValue: {
                get () {
                    return this.$store.state.stateValue
                },
                set (value) {
                    this.SET_STATE_VALUE(value)
                }
            },
            /*
            模块属性没有添加namespace 的获取方式
            通过 .$store.state 获取state里面的属性值

            */
            appName () {
                return this.$store.state.appName
            },
           /* userName () {
                return this.$store.state.user.userName
            }*/

           /*通过 mapState 传入数组的方式获取state属性值*/
           /*...mapState([
               'appName'
           ])*/

           /*通过 mapState 传入对象的方式获取state属性值*/
           /*...mapState({
               appName: state => state.appName,
               userName: state => state.user.userName  /!*user 模块里面的state*!/
           })*/

           /*如果 模块中的属性添加了namespace 有两种方式获取
           * 1. 通过vuex 的 createNamespacedHelpers
           *    import  { createNamespacedHelpers } from 'vuex'
                const { mapState } = createNamespacedHelpers('user')
           *
           * 2. 通过mapState 指定模块名的方式
           *
           *   ...mapState('user',{
                   userName: state => state.userName
               })
           *
           * */
            inputValueLaseLetter () {
               return this.inputValue.substr(-1,1)
            },
            /*appNameWithVersion () {
               return this.$store.getters.appNameWithVersion
            }*/
        },
        methods: {
            /**
             * 1.如果添加了mutations 提交某一个方法就需要：
             *
             *
             */
            ...mapMutations([
                'SET_APP_NAME',
                'SET_USER_NAME',
                'SET_STATE_VALUE'
                ]),
            ...mapActions([
                'updateAppName'
            ]),
            handleInput (val) {
                this.inputValue = val
            },
            handleChangeAppName () {
                /*1. commit  第一个参数就是提交的方法名，第一个参数是要修改的值，可以是单个参数，也可以是一个对象
                * 2.commit 对象的形式提交
                * type 要提交的方法名称  传递的参数的名称。获取参数也是以对象的形式获取。params.appName 这样
                * */
                /*this.$store.commit('SET_APP_NAME',{
                    appName:'newAppName'
                }) */
                /*this.$store.commit({
                    type: 'SET_APP_NAME',
                    appName:'newAppName'
                })*/

                this.updateAppName
                this.SET_APP_NAME({appName:'appNameNew'});
                this.$store.commit('SET_APP_VERSION')
            },
            changeUserName () {
                //this.$store.state.user.userName = 'haha'
                this.SET_USER_NAME('newUserName')
                //this.$store.dispatch("updateAppName",'123')  //dispatch 触发一个action
            },
            registerMoudle () {
                /*
                  动态注册模块
                * 第一个参数，需要动态注册的模块的名称
                * */
                /*this.$store.registerModule('todo',{
                    state: {
                        todoList: [
                            '学习mutations',
                            '学习actions',
                            '学习modules'
                        ]
                    }
                })*/

                /**
                 * ['user','todo'] 这个以数组的形式就是为 user 动态注册一个todo 模块
                 */
                this.$store.registerModule(['user','todo'],{
                    state: {
                        todoList: [
                            '学习mutations',
                            '学习actions',
                            '学习modules'
                        ]
                    }
                })
            },
            /*handleStateValueChange (val) {
                this.SET_STATE_VALUE(val)
            }*/
        }
    }
</script>

<style scoped>

</style>
