import Mock from 'mockjs'

const Random = Mock.Random
const getUserInfo = (options) =>{
    console.log(options)
    return {
        data: {
            homeName: 'moafmoarqq'
        }
    }
}

const getUserName = (options) => {
    console.log(options)
    return {
        data: {
            homeName: 'moafmoaqqr'
        }
    }
}

const getSupHomeName = (options) => {
    console.log(options)
    return {
        data: {userName:'mockUserName'}
    }
}

const updateSupName = (options) => {
    console.log(options)
    /*return {
           supName: 'updateMockSupName'
    };*/
    /*数据模板的7中情况*/
    const template = {
        /*supName|2-4  将supName字段的值重复 2-4遍*/
        'supName|2-4' : 'updateMockSupName',
        /*将name 这个字段的值重复9次*/
        'mockhomeName|9' : 'admin',
        /*age 字段 每次 +2 基础值是18*/
        'age|+2': 18,
        /*生成整数 范围是 4-10 ，默认是 0*/
        'num|4-10':0,
        /*整数3-10，小数点后至多保留2位，至少保留 5位 默认是 0*/
        'float|3-10.2-5':0,
        /*boolean 类型  1 表示生成true 的概率是 50%*/
        'boolean|1': true,
        /*boolean 类型  概率是 1/(1+9)) min/(min+max)*/
        'bool|1-9':true,
        /*从对想中随机抽取 2 种属性
        *  obj: {c: "cc", b: "bb"}
        * */
        'obj|2': {
            a:'aa',
            b:'bb',
            c:'cc'
        },
        'obj2|3-4': {
            a:'aa',
            b:'bb',
            c:'cc',
            d:'dd'
        },
        /*数组重复2-4次*/
        'arr|2-4': [1,2,4],
        /*数组重复指定的次数*/
        'arr2|4': ['a','b','c'],
        /*值为 return 的值*/
        'fun': () => {
            return 'this is function!'
        },
        /*正则表达式的方式*/
        'reg': /[1-9][a-z]/,
        email:/*Random.email()*/Mock.mock('@email'),
        /*每个元素之间差 2  [3, 5, 7, 9]*/
        range: Random.range(3,10,2),
        data: Random.date('yyyy-MM-dd'),
        time: Random.time('hh:mm:ss'),
        datetime:Random.datetime("yyyy-MM-dd HH:mm:ss"),
        now:Random.now('yyyy-MM-dd a HH:mm:ss'),
        img:Random.image('100x100','#00ff00','moafmoar'),
        coloers:Random.color(),
        food: Random.food()
    }
    let i = 3;
    let arr = []
    while (i--) {
        arr.push(template)
    }
    return Mock.mock(arr)
}

export {
    getUserInfo,
    getUserName,
    updateSupName,
    getSupHomeName
}


