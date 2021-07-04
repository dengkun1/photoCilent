import axios from "axios";
import router from "../router";
import store from "../store";

const http = axios.create({
    // 判断 如果是 dev 环境的话 /api  prod -》 xxxx
    baseURL: "/api",
});

//请求拦截
http.interceptors.request.use((config) => {
    // koa-jwt
    // request headers
    const token = store.state.token;
    if (token) {
        config.headers.authorization = "Bearer " + token;
    }
    return config;
});

http.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log(err.response);
        // xx ->
        if (err.response.status === 401) {
            router.replace({
                name: "Login",
            });
        }
    }
);

export default http;
