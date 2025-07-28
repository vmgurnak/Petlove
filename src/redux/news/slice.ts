import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchNewsRequest } from './operations';
// import { apiLogout } from '../auth/operations';
import { INewsState, INewsResponse, INewsItem } from '../../types.ts';

const initialState: INewsState = {
  news: { page: 1, perPage: 6, results: [], totalPages: 0 },
  isLoading: false,
  isError: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchNewsRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchNewsRequest.fulfilled,
        (state, action: PayloadAction<INewsResponse>) => {
          state.news = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchNewsRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),

  // .addCase(apiLogout.fulfilled, (state) => {
  //   state.news = initialState.news;
  //   state.isLoading = false;
  //   state.isError = false;

  //   // return initialState;
  // }),
});

export const newsReducer = newsSlice.reducer;

// Selectors news
export const selectNews = (state: RootState): INewsResponse => state.news.news;
export const selectNewsList = (state: RootState): INewsItem[] =>
  state.news.news.results;
export const selectTotalPages = (state: RootState): number =>
  state.news.news.totalPages;
export const selectIsLoading = (state: RootState): boolean =>
  state.news.isLoading;
export const selectIsError = (state: RootState): boolean => state.news.isError;
