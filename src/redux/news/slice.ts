import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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
  loading: boolean;
  error: boolean;
}

const initialState: INewsState = {
  news: { page: 1, perPage: 6, results: [], totalPages: 0 },
  loading: false,
  error: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchNewsRequest.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchNewsRequest.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(fetchNewsRequest.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const selectNews = (state: RootState) => state.news.news;

export const newsReducer = newsSlice.reducer;
