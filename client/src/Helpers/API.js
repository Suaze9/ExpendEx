const axios = require('axios');

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 15000,
})

export const setToken = (jwt) => {
  API.interceptors.request.use( (config) => {
    config.headers.auth = jwt;
    return config;    
  });
};

export default API;