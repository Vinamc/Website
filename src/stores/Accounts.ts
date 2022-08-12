import { defineStore } from 'pinia'

interface User{
    username: string,
    realname: string,
    isLogged: number,
    hasSession: number,
    token: string,
    refresh_token: string,
    points: string
}

export const useAccountStore = defineStore('account', {
    state: () => {
        return {account: null as User|null}
    },
    
    actions: {
        setUser (user: User) {
            this.account = user;
        },

        logout () {
            this.account = null;
        },

        check () {
            return this.account !== null;
        }
    }
})