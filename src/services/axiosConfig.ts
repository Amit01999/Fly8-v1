import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Fixed typo: BASE_UR -> BASE_URL
});

// Add request interceptor to include JWT token in Authorization header
axiosInstance.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem('token') || 'null');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Add response interceptor to handle 401 errors (e.g., token expiration)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/signin/student'; // Redirect to login on unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
