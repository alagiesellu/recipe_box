<script setup>
import ProductAccordion from "@/components/ProductAccordion.vue";
</script>

<template>
    <main>
        <div class="add-btn mb-2">
            <button @click="doCreate" class="btn btn-outline-primary btn-sm">
                Add Recipe
            </button>
        </div>
        <vue-collapsible-panel-group baseColor="#234a39">
            <ProductAccordion
                v-for="product in productsStore.products"
                :key="product.id"
                :product="product"
                @doEdit="doEdit"
                @doDelete="doDelete"
            />
        </vue-collapsible-panel-group>
        <vue-final-modal v-model="modal.show">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ modal.title }}</h5>
                    </div>
                    <div class="modal-body">
                        <p>{{ modal.content }}</p>
                        <form>
                            <div
                                v-if="modal.inputs.name !== undefined"
                                class="form-group my-4"
                            >
                                <label for="name">Recipe</label>
                                <input
                                    v-model="modal.inputs.name"
                                    class="form-control"
                                    placeholder="Recipe"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div
                                v-if="modal.inputs.ingredients !== undefined"
                                class="form-group my-4"
                            >
                                <label for="ingredients">Ingredients</label>
                                <textarea
                                    v-model="modal.inputs.ingredients"
                                    class="form-control"
                                    placeholder="Ingredients"
                                    name="ingredients"
                                    id="ingredients"
                                    required
                                    rows="6"
                                ></textarea>
                            </div>
                            <div
                                v-if="modal.inputs.directions !== undefined"
                                class="form-group my-4"
                            >
                                <label for="directions">Directions</label>
                                <textarea
                                    v-model="modal.inputs.directions"
                                    class="form-control"
                                    placeholder="Directions"
                                    name="directions"
                                    id="directions"
                                    required
                                    rows="6"
                                ></textarea>
                            </div>
                            <input
                                type="submit"
                                class="btn btn-primary"
                                @click="submitForm"
                                :value="modal.title"
                            />
                            <button
                                class="btn btn-danger mx-2"
                                type="button"
                                @click="modal.show = false"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </vue-final-modal>
    </main>
</template>
<script>
import {
    deleteProduct,
    editProduct,
    getProducts,
    storeProduct,
} from "../services/ApiService";
import { useProductsStore } from "../stores/products";

export default {
    data() {
        return {
            productsStore: useProductsStore(),
            modal: {
                inputs: {},
            },
        };
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        submitForm: function (e) {
            e.preventDefault();
            if (this.modal.type === "edit") {
                editProduct(this.modal.inputs.id, this.modal.inputs).then(
                    (response) => {
                        this.loadProducts();
                        this.modal.show = false;
                        this.$notify({
                            type: "success",
                            text: response.message,
                        });
                    }
                );
            } else if (this.modal.type === "delete") {
                deleteProduct(this.modal.inputs.id).then((response) => {
                    this.loadProducts();
                    this.modal.show = false;
                    this.$notify({
                        type: "success",
                        text: response.message,
                    });
                });
            } else if (this.modal.type === "store") {
                storeProduct(this.modal.inputs).then((response) => {
                    this.loadProducts();
                    this.modal.show = false;
                    this.$notify({
                        type: "success",
                        text: response.message,
                    });
                });
            }
        },
        doCreate() {
            this.modal = {
                show: true,
                type: "store",
                inputs: {
                    name: "",
                    ingredients: "",
                    directions: "",
                },
                title: "Add Recipe",
            };
        },
        doEdit(product) {
            this.modal = {
                show: true,
                type: "edit",
                inputs: {
                    id: product.id,
                    name: product.name,
                    ingredients: product.ingredients,
                    directions: product.directions,
                },
                title: "Edit Recipe",
            };
        },
        doDelete(product) {
            this.modal = {
                show: true,
                type: "delete",
                inputs: {
                    id: product.id,
                },
                title: "Delete Recipe",
                content: "Are you sure you want to delete Recipe?",
            };
        },
        loadProducts() {
            getProducts().then((response) => {
                this.productsStore.products = response.data;
            });
        },
    },
};
</script>
