export const beaseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000': ''  /*如果在vue.config.js里面没有配置代理，''里面需要配置服务端的地址*/
