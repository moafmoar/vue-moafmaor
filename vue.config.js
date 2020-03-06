const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    lintOnSave: false,
    publicPath: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
    devServer: {
        //proxy: 'http://localhost:3000'  /*如果使用mock 模拟数据请求的话，这里配置代理服务器地址是无效的，只能通过baseUrl来配置使用*/
    }
}
