import axios from "axios";

const homeApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://127.0.0.1:8080",
  headers: { "Content-type": "application/json" },
});

// Add a request interceptor
homeApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("request: ", config);
    return config;
  },
  function (error) {
    // Do something with request error
    // console.log("request error: ", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
homeApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("response: ", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("response error: ", error);
    return Promise.reject(error);
  }
);

export default homeApi;
