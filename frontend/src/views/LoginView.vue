<template>
    <main class="row justify-content-md-center">
        <div class="col-md-6 col-md-auto">
            <h1>Login</h1>
            <form class="form-group">
                <input
                    v-model="input.email"
                    type="email"
                    class="form-control my-4"
                    placeholder="Email"
                    required
                />
                <input
                    v-model="input.password"
                    type="password"
                    class="form-control my-4"
                    placeholder="Password"
                    required
                />
                <input
                    type="submit"
                    class="btn btn-primary"
                    @click="submitForm"
                    value="Login"
                />
                <p>
                    Don't have an account?
                    <RouterLink :to="{ name: 'register' }">Sign up here</RouterLink>
                </p>
            </form>
        </div>
    </main>
</template>
<script>
import { postLogin } from "../services/ApiService";
export default {
    data() {
        return {
            input: {},
        };
    },
    methods: {
        submitForm: function (e) {
            e.preventDefault();
            if (this.input.email && this.input.email) {
                postLogin(this.input).then((response) => {
                    localStorage.setItem("jwt", response);
                    this.$router.push({ name: "home" });
                });
            }
        },
    },
};
</script>
