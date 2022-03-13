<template>
    <main class="row justify-content-md-center">
        <div class="col-md-6 col-md-auto">
            <h1>Register Account</h1>
            <form class="form-group">
                <input
                    v-model="input.name"
                    type="text"
                    class="form-control my-4"
                    placeholder="Name"
                    required
                />
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
                    value="Register"
                />
                <p>
                    Already have an account?
                    <RouterLink :to="{ name: 'login' }"
                        >Sign in here</RouterLink
                    >
                </p>
            </form>
        </div>
    </main>
</template>
<script>
import { postRegister } from "../services/ApiService";
export default {
    data() {
        return {
            input: {},
        };
    },
    methods: {
        submitForm: function (e) {
            e.preventDefault();
            if (this.input.name && this.input.email && this.input.email) {
                postRegister(this.input).then(() => {
                    this.$router.push({ name: "home" });
                });
            }
        },
    },
};
</script>
