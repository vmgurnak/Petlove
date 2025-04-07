import axios from 'axios';

import {
  ILoginUser,
  ILoginResponse,
  IRegisterUser,
  IRegisterResponse,
  IRefreshResponse,
  ILogOutResponse,
  INewsParams,
  INewsResponse,
} from '../types.ts';

const BASE_URL = 'https://petlove.b.goit.study/api';

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const requestNews = async (
  paramsRequest: INewsParams
): Promise<INewsResponse> => {
  const config = {
    params: paramsRequest,
  };

  const response = await axios.get('/news', config);

  return response.data;
};

export const requestLogin = async (
  user: ILoginUser
): Promise<ILoginResponse> => {
  const response = await axios.post('/users/signin', user);
  setAuthHeader(response.data.token);
  return response.data;
};

export const requestRegister = async (
  newUser: IRegisterUser
): Promise<IRegisterResponse> => {
  const response = await axios.post('/users/signup', newUser);
  setAuthHeader(response.data.token);

  return response.data;
};

export const requestLogout = async (): Promise<ILogOutResponse> => {
  const response = await axios.post('/users/signout');
  clearAuthHeader();

  return response.data;
};

export const requestRefreshUser = async (): Promise<IRefreshResponse> => {
  const response = await axios.get('/users/current');

  return response.data;
};
