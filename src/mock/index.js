import Mock from 'mockjs'
import {getUserInfo,getUserName,updateSupName,getSupHomeName} from "./respone/user";
const Random = Mock.Random


Mock.mock(/\/getUserInfo/,'post',getUserInfo)
Mock.mock(/\/getUserName/,getUserName)
Mock.mock(/\/getUserName/,{data:{userName:'tempMockUserName'}})
Mock.mock(/\/updateSupName/,'put',updateSupName)

/*设置访问延时*/
Mock.setup({
    timeout:0
})
/*自定义模板属性*/
Random.extend({
    food () {
        const food = ['面包','剪刀面','小屁面','意大利面']
        return this.pick(food)
    }
})

export default Mock
