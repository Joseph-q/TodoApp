import axios from "axios";

const API_URL: string = "http://localhost:5199/api";

const authToken = localStorage.getItem("auth");

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: authToken ? `Bearer ${authToken}` : "",
  },
});

api.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("auth");
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default api;