import axios from "axios";

export default {
    API_PATH: "http://localhost:8000/api",

    get(url, request) {
        return axios.get(this.API_PATH + url, request);
    },
    post(url, request) {
        return axios.post(this.API_PATH + url, request);
    },
    patch(url, request) {
        return axios.patch(this.API_PATH + url, request);
    },
    delete(url, request) {
        return axios.delete(this.API_PATH + url, request);
    },
};
