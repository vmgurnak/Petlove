import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestFriends } from '../../services/api';
import { IFriendsResponce } from '../../types.ts';

export const fetchFriendsRequest = createAsyncThunk<IFriendsResponce>(
  'fetchNewsRequest',
  async (_, thunkAPI) => {
    try {
      const response = await requestFriends();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
