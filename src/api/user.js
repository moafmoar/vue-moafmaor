import axios from './index'

 const getUserInfo = ({ userId }) => {
    return axios.request({
        url: '/index/getUserInfo',
        method: 'post',
        data: {
            userId
        }
    })
}

 const getUserName = ({userId}) => {
    return axios.request({
        url: '/users/getUserName',
        method: 'get',
        data: {
            Id:userId
        }
    })
}

export  {
    getUserInfo,
    getUserName
}
