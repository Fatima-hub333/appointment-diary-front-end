/* eslint-disable no-param-reassign */
import axios from 'axios';
import TokenManager from './tokenManger';

const BASEURL = 'https://book-vehicle.herokuapp.com';

const client = axios.create({
  baseURL: BASEURL,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    if (TokenManager.hasToken()) {
      config.headers.Authorization = `Bearer ${TokenManager.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
