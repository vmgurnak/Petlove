import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRegister, apiLogin, apiLogout, apiRefreshUser } from './operations';
import { RootState } from '../store';
import {
  ILoginResponse,
  IRegisterResponse,
  IRefreshResponse,
  IAuthState,
} from '../../types.ts';

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
      .addCase(apiRegister.pending, handlePending)
      .addCase(
        apiRegister.fulfilled,
        (state, action: PayloadAction<IRegisterResponse>) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.token = action.payload.token;
          state.isLogged = true;
          state.isLoading = false;
        }
      )
      .addCase(apiRegister.rejected, handleRejected)
      .addCase(apiLogin.pending, handlePending)
      .addCase(
        apiLogin.fulfilled,
        (state, action: PayloadAction<ILoginResponse>) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.token = action.payload.token;
          state.isLogged = true;
          state.isLoading = false;
        }
      )
      .addCase(apiLogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiLogout.pending, handlePending)
      .addCase(apiLogout.fulfilled, (state) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLogged = false;
        state.isLoading = false;
        state.isError = false;

        // Object.assign(state, initialState);
        // return initialState;
      })
      .addCase(apiLogout.rejected, (state) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLogged = false;
        state.isLoading = false;
        state.isError = true;
        // Object.assign(state, { ...initialState, isError: true });
        // return { ...initialState, isError: true };
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(
        apiRefreshUser.fulfilled,
        (state, action: PayloadAction<IRefreshResponse>) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.token = action.payload.token;
          state.isRefreshing = false;
          state.isLogged = true;
        }
      )
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;

// Selectors auth
export const selectName = (state: RootState): string | null => state.auth.name;
export const selectEmail = (state: RootState): string | null =>
  state.auth.email;
export const selectToken = (state: RootState): string | null =>
  state.auth.token;
export const selectIsLogged = (state: RootState): boolean =>
  state.auth.isLogged;
export const selectIsLoading = (state: RootState): boolean =>
  state.auth.isLoading;
export const selectIsError = (state: RootState): boolean => state.auth.isError;
export const selectIsRefreshing = (state: RootState): boolean =>
  state.auth.isRefreshing;
