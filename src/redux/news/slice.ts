import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchNewsRequest } from './operations';

interface INews {
  page: number;
  perPage: number;
  results: object[];
  totalPages: number;
}

interface INewsState {
  news: INews;
  isLoading: boolean;
  isError: boolean;
}

const initialState: INewsState = {
  news: { page: 1, perPage: 6, results: [], totalPages: 0 },
  isLoading: false,
  isError: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchNewsRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchNewsRequest.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNewsRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const selectNews = (state: RootState) => state.news.news;
export const selectIsLoading = (state: RootState) => state.news.isLoading;
export const selectIsError = (state: RootState) => state.news.isError;

export const newsReducer = newsSlice.reducer;
