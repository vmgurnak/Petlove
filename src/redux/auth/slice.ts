import { createSlice } from '@reduxjs/toolkit';
import { apiRegister, apiLogin, apiLogout, apiRefreshUser } from './operations';
import { RootState } from '../store';

interface IAuthState {
  name: string | null;
  email: string | null;
  token: string | null;
  isLogged: boolean;
  isLoading: boolean;
  isError: boolean;
  isRefreshing: boolean;
}

const initialState: IAuthState = {
  name: null,
  email: null,
  token: null,
  isLogged: false,
  isLoading: false,
  isError: false,
  isRefreshing: false,
};

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state: IAuthState) => {
  state.isLoading = false;
  state.isError = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiRegister.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(apiRegister.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(apiLogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiLogout.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLogout.fulfilled, (state) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLogged = false;
        state.isLoading = false;

        // return initialState;
      })
      .addCase(apiLogout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLogged = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;

export const selectName = (state: RootState) => state.auth.name;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsLogged = (state: RootState) => state.auth.isLogged;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsError = (state: RootState) => state.auth.isError;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
