import axios from "axios";
import { isDemoMode } from "./demo";
import mockHttpClient from "./mocks/mockHttpClient";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

// Attach auth + session handling to an axios instance.
export const attachInterceptors = (instance) => {
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = config.headers || {};
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error && error.response && error.response.status;
      const url = (error && error.config && error.config.url) || "";
      if (status === 401 && !url.includes("/login")) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_role");
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

const createRealClient = () =>
  attachInterceptors(axios.create({ baseURL, withCredentials: true }));

const httpClient = isDemoMode() ? mockHttpClient : createRealClient();

export default httpClient;
