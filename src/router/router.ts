import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import VPost from "../views/VPost.vue";
import VCreatePost from "../views/VCreatePost.vue";
import VProfile from "../views/VProfile.vue"
import {useStore} from "vuex";
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
        path:'/profile',
        component: VProfile,
        name: "profile",
        beforeEach: (to: any, from: any, next: any) => {
            if (store.state.loginStore.isLogin) {
                next();
            } else {
                next('/');
            }
        },
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;