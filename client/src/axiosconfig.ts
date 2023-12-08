import axios from "axios";
import { SERVER_PORT } from "../../config.json";


const instance = axios.create({
    baseURL: `http://localhost:${SERVER_PORT}/`,
    timeout: 1000
});

export function getAxios() {
    return instance;
}