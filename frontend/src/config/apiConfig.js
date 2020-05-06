import axios from "axios";

const domain = "http://localhost:3001";

const config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache",
  },
  params: {},
};

const api = axios.create(config);

export default api;
