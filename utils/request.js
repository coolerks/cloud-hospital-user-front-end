import axios from "axios";
import {MessageBox, Message} from 'element-ui'
import jsCookie from "js-cookie";

// create an axios instance
const service = axios.create({
    baseURL: 'http://localhost:8888', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        // console.log(jsCookie);
        if (jsCookie.get("token")) {
            config.headers['token'] = jsCookie.get('token');
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (res.code === 208) {
            loginEvent.$emit("loginDialogEvent");
            return res;
        } else if (res.code === 301) {
            Message({
                message: "您首次使用此微信进行登录，需要绑定手机号码",
                type: 'error',
                duration: 5 * 1000
            })

            return res;
        } else if (res.code !== 200) {
            Message({
                message: res.data || res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return res
        } else {
            // this.$message.success(res.message)
            Message({
                message: res.message || 'Error',
                type: 'success',
                duration: 5 * 1000
            })
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
