<template>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            <h5>{{ product.name }}</h5>
        </template>
        <template #content>
            <div
                v-if="
                    authStore.auth && product.user_id === authStore.auth.getId()
                "
                class="float-end"
            >
                <button
                    @click="doEdit(product)"
                    class="btn btn-outline-primary btn-sm m-2"
                >
                    Edit
                </button>
                <button
                    @click="doDelete(product)"
                    class="btn btn-outline-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
            <h6>Ingredients</h6>
            {{ product.ingredients }}
            <hr />
            <h6>Directions</h6>
            {{ product.directions }}
            <hr />
            <small>
                By
                <strong>{{ product.user.name }}</strong>
            </small>
        </template>
    </vue-collapsible-panel>
</template>
<script>
import { useAuthStore } from "../stores/auth";

export default {
    props: {
        product: Object,
    },
    data() {
        return {
            authStore: useAuthStore(),
        };
    },
    methods: {
        doEdit(product) {
            this.$emit("doEdit", product);
        },
        doDelete(product) {
            this.$emit("doDelete", product);
        },
    },
};
</script>
