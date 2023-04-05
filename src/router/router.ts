import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import VPost from "../views/VPost.vue";


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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;