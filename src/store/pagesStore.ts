import json from "../json/message.json";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
export default {
    state: {
        totalPages: 0,
        currentPage: 0,
        itemsPerPage : 0
    },
    getters: {
        getNumItemsPerPage (state: any) {
            return state.itemsPerPage + 7
        },
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    }
}