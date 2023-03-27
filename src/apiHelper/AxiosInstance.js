import axios from 'axios';
import store from '../redux/store';

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 5000,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    let token;
    if (
      JSON.parse(localStorage.getItem('userInfo')) ||
      store.getState().signIn.userInfo
    ) {
      token =
        JSON.parse(localStorage.getItem('userInfo')).token ||
        store.getState().signIn.userInfo.token;
    }

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
