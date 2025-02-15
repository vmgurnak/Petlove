import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestNews } from '../../services/api';

export const fetchNewsRequest = createAsyncThunk(
  'fetchNewsRequest',
  async (_, thunkAPI) => {
    try {
      const response = await requestNews();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
