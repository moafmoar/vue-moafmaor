/*持久化存储插件*/
/*
* 两种写法
* 第一种
*
* import 方式 import {saveInLocal} from "./plugin/saveInLocal";

* */
/*export const saveInLocal = store => {
    /!*
    * 当每次提交mutation 时都会执行 subscribe 里面传入的回调函数
    * *!/
    console.log("store 初始化")
    store.subscribe((mutation, state) =>{
        console.log("提交 mutations ")
    })

}*/

/*
* 第二种
* import 方式  import saveInLocal  from "./plugin/saveInLocal";
* */
export default store => {
    /*
    * 当每次提交mutation 时都会执行 subscribe 里面传入的回调函数
    * */
    console.log("store 初始化")
    if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutation, state) =>{
        console.log("提交 mutations ")
        localStorage.state = JSON.stringify(state)
    })

}
