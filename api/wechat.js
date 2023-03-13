import request from "@/utils/request";

export let getLoginParam = () => {
    return request({
        url: '/api/ucenter/param',
        method: 'get'
    })
}

export let getToken = (code) => {
    return request({
        url: '/api/ucenter/vxlogin',
        method: 'get',
        params: {
            code
        }
    })
}

export let bindPhone = params => {
    return request({
        url: '/api/ucenter/bind',
        method: 'get',
        params
    })
}
