import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: 'https://barefoot-backend-development.herokuapp.com/api/v1',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (request) => {
    // Do something before request is sent
    request.headers.authorization = localStorage.getItem('BarefootNomadToken');
    return request;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      localStorage.removeItem('BarefootNomadToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
