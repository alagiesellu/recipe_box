import { defineStore } from "pinia";

export const authStore = defineStore({
    id: "auth",
    state: () => ({
        auth: null,
        isAuthenticated: false,
    }),
    getters: {},
    actions: {
        authenticated() {
            this.isAuthenticated = true;
        },
    },
});
