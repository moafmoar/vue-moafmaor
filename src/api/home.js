import axios from "./index";

export const updateSupName = () => {
    return axios.request({
        url: '/users/updateSupName',
        method: 'put'
    })
}
