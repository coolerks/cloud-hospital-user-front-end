import request from "@/utils/request";

export let getLoginParam = () => {
    return request({
        url: '/api/user/login/vx/param',
        method: 'get'
    })
}
