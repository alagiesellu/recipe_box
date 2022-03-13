import api from "./api";

export async function getProducts() {
    return await api
        .get("/products")
        .then((response) => {
            localStorage.setItem(
                "productsStore",
                JSON.stringify(response.data)
            );
            return response.data;
        })
        .catch(() => {
            return JSON.parse(localStorage.getItem("productsStore"));
        });
}

export async function editProduct(id, inputs) {
    const response = await api.patch("/products/" + id, inputs);
    return response.data;
}

export async function deleteProduct(id) {
    const response = await api.delete("/products/" + id);
    return response.data;
}

export async function storeProduct(inputs) {
    const response = await api.post("/products", inputs);
    return response.data;
}

export async function getAuthUser() {
    const response = await api.get("/user");
    return response.data;
}

export async function postLogin(data) {
    const response = await api.post("/login", data);
    return response.data;
}

export async function postLogout() {
    await api.post("/logout");
}

export async function postRegister(data) {
    const response = await api.post("/register", data);
    return response.data;
}
