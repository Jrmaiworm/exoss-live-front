import axios from "axios";

const api = axios.create({
   
    baseURL: "http://177.70.102.109:3037/"
})

api.interceptors.request.use(
    (config) => {
        const userJWT = localStorage.getItem('usuario');

        if(userJWT) {
            config.headers.Authorization = `Bearer ${userJWT}`;
        }
        return config;
    },
    (e) => {
      return Promise.reject(e);
    }
);
export default api;