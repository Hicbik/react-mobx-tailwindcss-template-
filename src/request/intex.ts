import axios from 'axios';

import config from '@/config';

const clientAxios = axios.create();

clientAxios.defaults.baseURL = config.baseUrl;

clientAxios.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
);

clientAxios.interceptors.response.use((response) => response.data);

export const post = (url, data = {}) =>
  clientAxios({
    url,
    method: 'POST',
    data,
  });

export const get = (url, data = {}) =>
  clientAxios({
    url,
    method: 'GET',
    params: data,
  });

export default clientAxios;
