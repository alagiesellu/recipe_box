import { defineStore } from "pinia";
import Auth from "../models";

export const useProductsStore = defineStore({
    id: "auth",
    state: () => ({
        products: {},
        product: {},
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
