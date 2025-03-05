import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestRegister,
  requestLogin,
  requestLogout,
  requestRefreshUser,
  setAuthHeader,
} from '../../services/api';

interface userRegister {
  name: string;
  email: string;
  password: string;
}

interface userLogin {
  email: string;
  password: string;
}

interface IAuthState {
  name: string | null;
  email: string | null;
  token: string | null;
  isLogged: boolean;
  isLoading: boolean;
  isError: boolean;
  isRefreshing: boolean;
}

export const apiRegister = createAsyncThunk(
  'auth/register',
  async (user: userRegister, thunkAPI) => {
    try {
      const response = await requestRegister(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apiLogin = createAsyncThunk(
  'auth/login',
  async (user: userLogin, thunkAPI) => {
    try {
      const response = await requestLogin(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apiLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await requestLogout();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState() as { auth: IAuthState };
      setAuthHeader(reduxState.auth.token!);
      const response = await requestRefreshUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState() as { auth: IAuthState };
      return reduxState.auth.token !== null;

      // if (!reduxState.auth.token) return false;
      // return true;
    },
  }
);
