import Vue from "vue";
import Vuex from "vuex";
import {apiLogin} from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
    //初始化时候
    state: {
        token: localStorage.getItem("token") || "",
    },
    //突变
    mutations: {
        login(state, {token}) {
            state.token = token;
            console.log("打印state", state)
            localStorage.setItem("token", token);
        },
    },
    //行动
    actions: {
        async login({commit}, {username, password}) {
            const {data} = await apiLogin({
                username,
                password
            });
            commit("login", {token: data.data.token});
            console.log("打印data", data)
        }
    },
    modules: {},
});
