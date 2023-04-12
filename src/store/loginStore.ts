import {computed} from "vue";
import {useUserStore} from "./users";
import {useStore} from "vuex";
const store = useStore();
export default {
    state: {
        isLogin: false,
        haveAccount: false,
        inputLogin: '',
        inputEmail: '',
        inputPassword: '',
        inputPasswordRepeat: '',
        errorPassword: false,
        errorLogin: false,
        errorEmail: false,
        isActive: false,
        activeUser: {name: ""},
        isAdmin: "User",
        isBanned: false
    },
    getters: {

    },
    mutations: {
        disableErrors(state: any): void{
            state.errorPassword = state.errorLogin = state.errorEmail = false
        },
        closeClickHandler(state: any):void{
            state.isActive = state.isActive = false;
        },
        loginOpen(state: any): void {
            state.isActive = true
        },
        loginClose(state: any): void {
            state.isLogin = false
            state.isAdmin = "User"
        },

    },
    actions: {
        async login({state}: any): Promise<void> {
            const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)
            const userStore = useUserStore()
            if (state.inputLogin.length < 3){
                state.errorLogin = true
            }
            if (state.inputEmail.length < 3 && !state.haveAccount){
                state.errorEmail = true
            }
            if ((state.inputPassword !== state.inputPasswordRepeat && !state.haveAccount) || state.inputPassword.length <= 6){
                state.errorPassword = true
                return
            }
            if (state.haveAccount){
                console.log(`${state.inputLogin}, ${state.inputPassword} `)
                const requestBody = {
                    email: state.inputLogin,
                    password: state.inputPassword
                }
                try {
                    const response = await fetch(`${apiUrl.value}/user/login`, {
                        method: "POST",
                        body: JSON.stringify(requestBody),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                    const token = await response.json();
                    userStore.setToken(token.token);
                    userStore.setUsername(token.user.login);
                    state.isActive = state.isActive = false;
                }catch (e){
                    alert('Something went wrong' + e);
                }
            } else {
                console.log(`${state.inputLogin}, ${state.inputEmail}, ${state.inputPassword}, ${state.inputPasswordRepeat} `)
                const requestBody = {
                    login: state.inputLogin,
                    email: state.inputEmail,
                    password: state.inputPassword
                }
                try {
                    const response = await fetch(`${apiUrl.value}/user/register`, {
                        method: "POST",
                        body: JSON.stringify(requestBody),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                    const token = await response.json()
                    userStore.setToken(token.token);
                    userStore.setUsername(token.user.login);
                    state.isActive = state.isActive = false;
                }
                catch (e){
                    alert('Something went wrong')
                }
            }
        }
    },
    modules: {

    }
}