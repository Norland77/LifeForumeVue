import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import VPost from "../views/VPost.vue";
import VCreatePost from "../views/VCreatePost.vue";
import VProfile from "../views/VProfile.vue"
import {useStore} from "vuex";
import VRules from "../views/VRules.vue";
const store = useStore()
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
        path:'/rules',
        component: VRules,
        name: "rules",
    },
    {
        path:'/profile',
        component: VProfile,
        name: "profile",
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;