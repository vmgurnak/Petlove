import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestNews } from '../../services/api';

export const fetchNewsRequest = createAsyncThunk(
  'fetchNewsRequest',
  async (_, thunkAPI) => {
    try {
      return await requestNews();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
