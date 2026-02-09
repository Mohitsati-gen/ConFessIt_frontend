// this is basically a central API client
// used to avoid repeating code everywhere
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,  
  withCredentials: true, // important for cookies (JWT)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;