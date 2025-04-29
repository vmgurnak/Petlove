import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchNoticesRequest } from './operations';
import { INoticesState, INoticesResponse, INoticesItem } from '../../types.ts';

const initialState: INoticesState = {
  notices: { page: 1, perPage: 6, totalPages: 0, results: [] },
  isLoading: false,
  isError: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchNoticesRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchNoticesRequest.fulfilled,
        (state, action: PayloadAction<INoticesResponse>) => {
          state.notices = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchNoticesRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const noticesReducer = noticesSlice.reducer;
