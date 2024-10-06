import axios from "axios";

const unsplash = axios.create({
  baseURL: import.meta.env.VITE_UNSPLASH_BASE_URL,
  timeout: 5000,
});

export default unsplash;
