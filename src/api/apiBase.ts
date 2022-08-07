import Axios, { AxiosInstance } from 'axios';

export const freelyAPI = (): AxiosInstance => {
  return Axios.create({
    baseURL: 'http://localhost:3000',
  });
};
