<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <header class="col-md-8">
                <h1 class="site-title">
                    Recipe Box
                </h1>
            </header>
            <div class="col-md-4">
                <nav v-if="authStore.isAuthenticated">
                    <RouterLink :to="{ name: 'home' }">
                        {{ authStore.auth.getName() }}
                    </RouterLink>
                    <RouterLink v-on:click="logout" :to="{ name: 'login' }">
                        Logout
                    </RouterLink>
                </nav>
                <nav v-else>
                    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
                    <RouterLink :to="{ name: 'register' }">Register</RouterLink>
                </nav>
            </div>
            <RouterView class="col-md-12 my-4" />
            <footer class="col-md-12">By <strong>@alagiesellu</strong></footer>
        </div>
    </div>
    <notifications position="top center" />
</template>
<script>
import { getAuthUser, postLogout } from "./services/ApiService";
import { useAuthStore } from "./stores/auth";
export default {
    data() {
        return {
            authStore: useAuthStore(),
        };
    },
    watch: {
        $route() {
            if (localStorage.getItem("jwt"))
                getAuthUser()
                    .then((response) => {
                        this.authStore.loadAuth(response);
                    })
                    .catch(() => {
                        localStorage.clear();
                    });
        },
    },
    methods: {
        logout: function () {
            postLogout().then(() => {
                localStorage.clear();
                this.$router.push({ name: "login" });
                this.authStore.resetAuth();
            });
        },
    },
};
</script>
<style>
@import "@/assets/base.css";
@import "@/assets/custom.css";
</style>
