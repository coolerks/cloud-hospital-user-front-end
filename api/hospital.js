import request from "@/utils/request";

const baseUrl = '/api/hosp/hospital'
export let searchHospitalByName = (name) => {
    return request({
        url: `${baseUrl}/findByHosName/${name}`,
        method: "get"
    })
}

export let getHospitalList = (page, limit, params) => {
    return request({
        url: `${baseUrl}/findHospList/${page}/${limit}`,
        params
    })
}

export let getDepartmentByHoscode = hoscode => {
    return request({
        url: `${baseUrl}/department/${hoscode}`
    })
}
export let getHospitalDetailByHoscode = hoscode => {
    return request({
        url: `${baseUrl}/detail/${hoscode}`
    })
}
