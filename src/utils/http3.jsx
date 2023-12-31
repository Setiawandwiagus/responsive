/* eslint-disable no-template-curly-in-string */
import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";


const http3 = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Teknik Begal
http3.interceptors.request.use(
  // Inject header
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
    };
    return config;
  }
);

export default http3;
