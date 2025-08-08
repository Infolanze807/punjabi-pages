import axios from "axios";
import { store } from "./store";

const axiosConfig = axios.create({
  // baseURL: 'http://localhost:3000/api/',
  baseURL: 'https://punjabipages-backend.vercel.app/api/',
  // baseURL: 'https://3.27.63.238/api/api/',
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.error("Session expired, logging out...");
      // window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
export default axiosConfig;
