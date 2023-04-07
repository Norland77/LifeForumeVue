import json from "../json/users.json";
import {ref} from "vue";

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
    },
    getters: {

    },
    mutations: {
        disableErrors(state: any): void{
            state.errorPassword = state.errorLogin = state.errorEmail = false
        },
        closeClickHandler(state: any):void{
            state.isActive = false
        },
        loginOpen(state: any): void {
            state.isActive = true
        },
        loginClose(state: any): void {
            state.isLogin = false
        },
        login(state: any): void {
            let dataStr = JSON.stringify(json)
            let data = JSON.parse(dataStr)
            let usersData = ref(data)
            for (let item in usersData.value) {
                if (usersData.value[item].login === state.inputLogin && usersData.value[item].password === state.inputPassword) {
                    state.isActive = false;
                    state.activeUser = {
                        name: usersData.value[item].name
                    }
                    state.isLogin = true;
                }
            }
        }
    },
    actions: {

    },
    modules: {

    }
}