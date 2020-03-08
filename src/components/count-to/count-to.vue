<template>
    <div>
        <!--vue 插槽 slot-->
        <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
    </div>

</template>

<script>
    import CountUp from 'countup'
    import './count-to.less'
    export default {
        name: "CountTo",
        /*计算属性*/
        computed: {
          eleId () {
              return `count_up_${this._uid}`  /*this._uid  每个组件的这个值都不同，保证全局自增唯一*/
          },
          countClass () {
              return [
                  'count-to-number',
                  this.className
              ]
          }
        },
        data () {
            return {
                counter: {

                }
            }
        },
        props: {
            /*
            *
            * 起始值
            * */
          startVal: {
              type: Number,
              default: 0
          },
            /*
            * 最终值
            * */
            endVal: {
              type: Number,
              required: true //表示必传值,默认是 false
            },
            /*
            * 动画延迟
            * */
            delay: {
                type: Number,
                default: 0
            },
            /*
            * 小数点后保留几位
            * */
            decimals: {
                type: Number,
                default: 0
            },
            /*
            * 渐变时长
            * */
            duration: {
                type: Number,
                default: 1
            },
            /*
            * 是否使用变速效果
            * */
            useEasing: {
                type: Boolean,
                default: false
            },
            /*
            * 是否使用分组
            * */
            useGrouping: {
                type: Boolean,
                default: true
            },
            /*
            * 分组符号
            * */
            separator: {
                type: String,
                default: ','
            },
            /*
            * 小数与整数之间的分割符
            * */
            decimal: {
                type: String,
                default: '.'
            },
            className: {
                type: String,
                default: ''
            }
        },
        methods: {
            /*自定义方法*/
            getCount () {
               return this.$refs.number.innerText
            },
            emitEndEvent () {
                setTimeout(() => {
                    this.$emit('on-animation-end',Number(this.getCount()))
                },this.duration*1000)
            }
        },
        watch: {
            endVal (newVal,oldVal) {
                this.counter.update(newVal)
                this.emitEndEvent()
            }
        },
        /*实例创建并挂在到html标签上之后触发*/
        mounted() {
            this.$nextTick(() => {
                this.counter = new CountUp(this.eleId, this.startVal,this.endVal,this.decimals,this.duration,{
                   useEasing: this.useEasing,
                   useGrouping: this.useGrouping,
                   separator: this.separator,
                   decimal: this.decimal
               })
            }),
                setTimeout(() => {
                    this.counter.start()
                    this.emitEndEvent()
                },this.delay)
        }
    }
</script>

<style lang="less" scoped>
@import "./count-to.less";
</style>
