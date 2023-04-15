// @ts-ignore
import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useUserStore = defineStore("token", () => {

    const token = ref<undefined | string | number>(undefined);
    const username = ref<undefined | string | number>(undefined);
    const role = ref<undefined | string>(undefined);
    function setToken(newToken: string | number): void{
        token.value = newToken;
    }

    function setUsername(newUsername: string | number): void{
        username.value = newUsername;
    }

    function setRole(newRole: string) : void {
        role.value = newRole;
    }

    function logout(): void{
        username.value = undefined;
        token.value = undefined;
    }

    return { token, setToken, logout, username, setUsername, setRole, role }
})