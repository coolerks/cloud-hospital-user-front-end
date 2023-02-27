import request from "@/utils/request";

export let sendCode = phone => {
    return request({
        url: `/api/sms/send/${phone}`,
        method: 'get'
    })
}
