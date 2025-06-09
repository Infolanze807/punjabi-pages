import axios from "axios";

const axiosConfig = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
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
