import axios from 'axios';

const URLS = {
  backEndUrl: process.env.REACT_APP_URL,
};

const ACTIVE_URLS = URLS;


export const axiosInstance = axios.create({
  baseURL: ACTIVE_URLS.backEndUrl,
  timeout: 30000,
  headers: {
   
  }
});


axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response && error.response.status === 401) {}

    if (!error.response) {
      error.response = {
        data: {
          error_code: 'Connection problem!'
        }
      };
    }
    return Promise.reject(error);
  }
);
