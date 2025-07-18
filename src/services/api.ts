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
  INoticesParams,
  INoticesItem,
  INoticesResponse,
  ISelectList,
  ICities,
  IFriends,
} from '../types.ts';

const BASE_URL = 'https://petlove.b.goit.study/api';

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
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

export const requestNews = async (
  paramsRequest: INewsParams
): Promise<INewsResponse> => {
  const config = {
    params: paramsRequest,
  };

  const response = await axios.get('/news', config);

  return response.data;
};

export const requestNotices = async (
  paramsRequest: INoticesParams
): Promise<INoticesResponse> => {
  const config = {
    params: paramsRequest,
  };

  const response = await axios.get('/notices', config);

  return response.data;
};

export const requestNoticesCategories = async (): Promise<ISelectList> => {
  const response = await axios.get('/notices/categories');

  return response.data;
};

export const requestNoticesSex = async (): Promise<ISelectList> => {
  const response = await axios.get('/notices/sex');

  return response.data;
};

export const requestNoticesSpecies = async (): Promise<ISelectList> => {
  const response = await axios.get('/notices/species');

  return response.data;
};

export const requestNoticesById = async (id: string): Promise<INoticesItem> => {
  const response = await axios.get(`/notices/${id}`);

  return response.data;
};

export const requestCities = async (keyword: string): Promise<ICities> => {
  const config = {
    params: { keyword },
  };

  const response = await axios.get('/cities', config);

  return response.data;
};

export const requestCitiesPets = async (): Promise<ICities> => {
  const response = await axios.get('/cities/locations');

  return response.data;
};

export const requestFriends = async (): Promise<IFriends> => {
  const response = await axios.get('/friends');

  return response.data;
};
