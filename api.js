import axios from "axios";
import {URL} from './constant'

const token = JSON.parse(localStorage.getItem("token"));
axios.defaults.headers.common["Authorization"] = `User ${token}`;

const api = axios.create({
    baseURL: URL,
    headers: {
        Authorization: `User ${token}`,
    },
});

export default api;
