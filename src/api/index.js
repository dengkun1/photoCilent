// 后端通信的逻辑
import http from "../utils/http.js";

// api 开头
export function apiLogin({username, password}) {
    return http.post("/login", {
        username,
        password,
    })
}

//获取图片
export function apiGetPhotos() {
    // token
    return http.get("/getPhotos");
}

//上传图片
export function apiUpload(file) {
    //向 FormData 中添加新的属性值，FormData 对应的属性值存在也不会覆盖原值，而是新增一个值，如果属性不存在则新增一项属性值。
    const formData = new FormData();
    formData.append("img", file);
    return http.post("/upload", formData);
}