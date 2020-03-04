const path = require('path')
const resolve = dir => path.join(__dirname,dir)
const BEASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin':'/'
module.exports = {
    lintOnSave:false,
    publicPath: BEASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@',resolve('src'))
            .set('_c',resolve('src/components'))
    },

    productionSourceMap: false,
    devServer: {
       //proxy: 'http://localhost:3000'
    }
}
