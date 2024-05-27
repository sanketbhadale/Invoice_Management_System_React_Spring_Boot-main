import axios from "axios"

export const URL = "http://localhost:8080/api/v1/invoice";

const apiClient = axios.create({
    baseURL : URL
})

export default apiClient;