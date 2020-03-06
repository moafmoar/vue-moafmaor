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

const getSupHomeName = () => {
    return axios.request({
        url: '/users/getUserName',
        method: 'get'
    })
}

export  {
    getUserInfo,
    getUserName,
    getSupHomeName
}
