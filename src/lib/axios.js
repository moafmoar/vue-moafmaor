/*
import axios from 'axios'
import {beaseURL} from "../config";


class HttpRequest {
    /!*默认的构造器*!/
    constructor(beaseUrl = beaseURL) {
        this.beaseUrl = beaseUrl
        this.queue = {}
    }

    /!*配置config*!/
    getInsideConfig () {
        const config = {
            beaseURL: this.beaseUrl,
            header: {
                //
            }
        }
    }

    /!*添加拦截器*!/
    interceptors (instance,url) {
        ///!*请求拦截器*!/
        instance.interceptors.request.use(config => {
           //添加全局lodding
            if (Object.keys(this.queue).length) Spin.show()
            this.queue[url] = true

            return config
        },error => {
            return Promise.reject(error)
        })

        //响应拦截器
        instance.interceptors.response.use(res => {
            delete this.queue[url]
            const {data,status} = res  //过滤返回的数据属性
            console.log(res)
            return {data,status}
        },error => {
            delete this.queue[url]
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(),options)
        this.interceptors(instance,options.url)
        return instance(options)
    }
}

export default HttpRequest
*/

/*import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                //
            }
        }
        return config
    }
    interceptors (instance, url) {
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show()
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            delete this.queue[url]
            const { data, status } = res
            return { data, status }
        }, error => {
            delete this.queue[url]
            return Promise.reject(error)
        })
    }
    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest*/

import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                //
            }
        }
        return config
    }
    distroy (url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }
    interceptors (instance, url) {
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show()
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            this.distroy(url)
            const { data, status } = res
            return { data, status }
        }, error => {
            this.distroy(url)
            return Promise.reject(error)
        })
    }
    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest
