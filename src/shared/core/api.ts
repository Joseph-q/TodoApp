import axios from "axios";

const API_URL: string = "http://localhost:8080/api";

const authToken = localStorage.getItem("auth");

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: authToken ? `Bearer ${authToken}` : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJuYmYiOjE3NDIxNTQyOTAsImV4cCI6MTc0MjE5MDI5MCwiaWF0IjoxNzQyMTU0MjkwfQ.WhkVs1KOqxuR32Xavtf9HkBnrlXwp_oW1TzjJelT5Gw",
  },
});


export default api;