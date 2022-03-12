<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
    <main>
        <TheWelcome />
    </main>
</template>
<script>
import { getProducts } from "../services/ApiService";
import { useProductsStore } from "../stores/products";

export default {
    data() {
        return {
            productsStore: useProductsStore(),
        };
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        loadProducts() {
            getProducts().then((response) => {
                this.productsStore.products = response.data;
            });
        },
    },
};
</script>
