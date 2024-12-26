import axios from "axios";


const baseURL = "http://localhost:8081/api/v1/";
const axiosIns = axios.create({
  baseURL: baseURL,
});


axiosIns.interceptors.request.use(
    async (config) => {
        return config;
});


export default axiosIns;