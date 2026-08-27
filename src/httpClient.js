import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "https://salon-appointment-api.onrender.com/api/v1";

const httpClient = axios.create({
  baseURL,
  withCredentials: true,
});

export default httpClient;