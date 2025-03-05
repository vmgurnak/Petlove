import axios from 'axios';

const BASE_URL = 'https://petlove.b.goit.study/api';

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const requestNews = async <T>(
  keyword?: string | null,
  page?: number,
  limit?: number
): Promise<T> => {
  const config = {
    params: {
      keyword,
      page,
      limit,
    },
  };

  const response: { data: T } = await axios.get('/news', config);

  return response.data;
};

export const requestRegister = async <T>(newUser: {
  name: string;
  email: string;
  password: string;
}): Promise<T> => {
  const response = await axios.post('/users/signup', newUser);
  setAuthHeader(response.data.token);

  return response.data;
};

export const requestLogin = async <T>(user: {
  email: string;
  password: string;
}): Promise<T> => {
  const response = await axios.post('/users/signin', user);
  setAuthHeader(response.data.token);
  return response.data;
};

export const requestLogout = async <T>(): Promise<T> => {
  const response = await axios.post('/users/signout');
  clearAuthHeader();

  return response.data;
};

export const requestRefreshUser = async () => {
  const response = await axios.get('/users/current');

  return response.data;
};
