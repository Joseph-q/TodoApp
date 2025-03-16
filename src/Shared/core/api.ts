import axios from "axios";

const API_URL: string = "https://localhost:5000/api";

const authToken = localStorage.getItem("auth");

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: authToken ? `Bearer ${authToken}` : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJuYmYiOjE3NDIxNDkzMTIsImV4cCI6MTc0MjE4NTMxMiwiaWF0IjoxNzQyMTQ5MzEyfQ.ZZgUDhc0SWzuA-D5XncGp-QifZhLavFoBE3tjV4L6JI",
  },
});


export default api;