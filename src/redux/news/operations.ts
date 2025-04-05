import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestNews } from '../../services/api';
import { INewsParams, INewsResponse } from '../../types.ts';

export const fetchNewsRequest = createAsyncThunk<INewsResponse, INewsParams>(
  'fetchNewsRequest',
  async (paramsRequest, thunkAPI) => {
    try {
      const response = await requestNews(paramsRequest);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
