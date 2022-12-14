import axios from "axios";
import { notify } from "@kyvg/vue3-notification";

const API_PATH = "/api";

const axiosInstance = axios.create({
    baseURL: API_PATH,
});

function loadErrors(errors) {
    let errorsString = "";
    for (const errorArr in errors) {
        for (const error of errors[errorArr]) {
            errorsString += error + " ";
        }
    }
    return errorsString;
}

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/json";
    } else {
        // Do something...
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        notify({
            type: "error",
            text:
                loadErrors(error.response.data.errors) ||
                error.response.statusText,
        });
        return Promise.reject(error);
    }
);

export default axiosInstance;
