import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8888/',
    withCredentials: true,// Gateway service URL
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;