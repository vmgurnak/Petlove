import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestRegister,
  requestLogin,
  requestLogout,
} from '../../services/api';

export const apiRegister = createAsyncThunk(
  'auth/register',
  async (user: object, thunkAPI) => {
    try {
      const response = await requestRegister(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLogin = createAsyncThunk(
  'auth/login',
  async (user: object, thunkAPI) => {
    try {
      const response = await requestLogin(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
