import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // 替换为你的 API 地址

export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};
