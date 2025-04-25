import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestNotices } from '../../services/api';
import { INoticesParams, INoticesResponse } from '../../types.ts';

export const fetchNoticesRequest = createAsyncThunk<
  INoticesResponse,
  INoticesParams
>('fetchNewsRequest', async (paramsRequest, thunkAPI) => {
  try {
    const response = await requestNotices(paramsRequest);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
