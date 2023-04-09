import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import VPost from "../views/VPost.vue";
import VCreatePost from "../views/VCreatePost.vue";
import VUserInfo from "../views/VUserInfo.vue"


const routes =[
    {
        path:'/',
        component: Home,
        name: "home"
    },
    {
        path:'/post/:id',
        component: VPost,
        name: "post",
    },
    {
        path:'/createTheme',
        component: VCreatePost,
        name: "createTheme",
    },
    {
        path:'/userInfo',
        component: VUserInfo,
        name: "userInfo",
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;