import { ref } from "vue";
import messagesJson from "../json/message.json";
import usersJson from "../json/users.json";

export default {
    state: {
        themesCount: 0,
        messageCount: 0,
        usersCount: 0
    },
    getters: {
        getThemesCount(state: any) {
            let dataStr = JSON.stringify(messagesJson)
            let data = JSON.parse(dataStr)
            state.themesCount = data.length
            return state.themesCount;
        },
        getMessageCount(state: any) {
            let dataStr = JSON.stringify(messagesJson)
            let data = JSON.parse(dataStr)
            const message = ref(data)
            message.value.map((item: any) => {
                state.messageCount += item.messages.length
            })
            return state.messageCount
        },
        getUsersCount(state: any) {
            let dataStr = JSON.stringify(usersJson)
            let data = JSON.parse(dataStr)
            state.usersCount = data.length
            return state.usersCount;
        }
    },
    mutations: {},
    actions: {},
    modules: {}
};