import { defineStore } from "pinia";
import Auth from "../models";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        auth: null,
        isAuthenticated: false,
    }),
    getters: {},
    actions: {
        loadAuth(response) {
            this.auth = new Auth(response);
            this.isAuthenticated = true;
        },
        resetAuth() {
            this.auth = null;
            this.isAuthenticated = false;
        },
    },
});
