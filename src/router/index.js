import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Photo from "../views/Photo";
// import Detail from "../views/Detail"
import  store from "../store"
Vue.use(VueRouter);

const routes = [
    //  登录的路由
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/photo",
        name: "Photo",
        component: Photo,
    },
    // {
    //     path: "/detail",
    //     name: "Detail",
    //     component: Detail,
    //     //传参
    //     props: true,
    // },
    {
        name: "Detail",
        path: "/detail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        props: true,
        meta: {
            isAuth: true
        },
        component: () =>
            import(/* webpackChunkName: "details" */ "../views/Detail.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
//    路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        const token = store.store.token
        if (token) {
            next()
        } else {
            next({
                name:"Login"
            })
        }
    }else{
        next()
    }
})

export default router;
