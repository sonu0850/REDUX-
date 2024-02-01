import axios from "axios";
  // Log the specific variable
// Create an Axios instance
const Api = axios.create({
  baseURL:`https://jsonplaceholder.typicode.com`,
  headers: {
    "Accept": "application/json",
    "Content-type": "application/json",
  },
});
// Add a request interceptor
Api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization =` Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 export default Api