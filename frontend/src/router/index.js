import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

function authStored() {
    return typeof localStorage.getItem("jwt") === "string";
}

// eslint-disable-next-line no-unused-vars
function isAuthenticated(to, from) {
    if (!authStored()) {
        return "login";
    }
}

// eslint-disable-next-line no-unused-vars
function isUnauthenticated(to, from) {
    if (authStored()) {
        return "home";
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            beforeEnter: isAuthenticated,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            beforeEnter: isUnauthenticated,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
            beforeEnter: isUnauthenticated,
        },
        {
            path: "/about",
            name: "about",
            component: ProductView,
            beforeEnter: isAuthenticated,
        },
    ],
});

export default router;
