import axios from "axios";

const apiUrl = import.meta.env.VITE_API;
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
