import request from "@/utils/request";

const baseUrl = '/admin/cmn/dict'

export let getDictByParentId = id => {
    return request({
        url: `${baseUrl}/findChildData/${id}`,
        method: 'get'
    })
}

