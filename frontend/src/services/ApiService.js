import api from "./api";

export async function getProducts() {
    const response = await api.get("/products");
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
