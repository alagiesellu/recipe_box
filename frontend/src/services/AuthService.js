import api from "./api";

export async function getAuthUser() {
    const response = await api.post("/user");
    return response.data;
}

export async function postLogin(email, password) {
    const response = await api.post("/login", {
        email: email,
        password: password,
    });
    return response.data;
}

export async function postRegister(name, email, password) {
    const response = await api.post("/register", {
        name: name,
        email: email,
        password: password,
    });
    return response.data;
}
