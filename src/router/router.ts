import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import VPost from "../views/VPost.vue";
import VCreatePost from "../views/VCreatePost.vue";


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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;