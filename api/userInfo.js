import request from "@/utils/request";

export let userLogin = userInfo => {
    return request({
        url : `/api/user/login`,
        method: "post",
        data: userInfo
    })
}
