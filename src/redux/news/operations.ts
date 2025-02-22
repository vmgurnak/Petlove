import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestNews } from '../../services/api';

interface IFetchNewsRequestArgs {
  keyword?: string;
  page?: number;
  limit?: number;
}

export const fetchNewsRequest = createAsyncThunk(
  'fetchNewsRequest',
  async ({ keyword, page, limit }: IFetchNewsRequestArgs, thunkAPI) => {
    try {
      const response = await requestNews(keyword, page, limit);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
