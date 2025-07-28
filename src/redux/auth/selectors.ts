import { RootState } from '../store';

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
