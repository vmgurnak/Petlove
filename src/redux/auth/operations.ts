import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestRegister,
  requestLogin,
  requestLogout,
  requestRefreshUser,
  setAuthHeader,
} from '../../services/api';

import {
  ILoginUser,
  ILoginResponse,
  IRegisterUser,
  IRegisterResponse,
  IRefreshResponse,
  ILogOutResponse,
  // IAuthState,
} from '../../types.ts';

import { RootState } from '../store.ts';

export const apiRegister = createAsyncThunk<IRegisterResponse, IRegisterUser>(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await requestRegister(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apiLogin = createAsyncThunk<ILoginResponse, ILoginUser>(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await requestLogin(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apiLogout = createAsyncThunk<ILogOutResponse>(
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

export const apiRefreshUser = createAsyncThunk<IRefreshResponse>(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      // const reduxState = thunkAPI.getState() as { auth: IAuthState };
      const reduxState = thunkAPI.getState() as RootState;
      setAuthHeader(reduxState.auth.token!);
      const response = await requestRefreshUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition(_, thunkAPI) {
      // const reduxState = thunkAPI.getState() as { auth: IAuthState };
      const reduxState = thunkAPI.getState() as RootState;
      return reduxState.auth.token !== null;

      // if (!reduxState.auth.token) return false;
      // return true;
    },
  }
);
