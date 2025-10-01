import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFriendsRequest } from './operations';
import { IFriendsResponce, IFriendsState } from '../../types.ts';

const initialState: IFriendsState = {
  friends: [],
  isLoading: false,
  isError: false,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchFriendsRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchFriendsRequest.fulfilled,
        (state, action: PayloadAction<IFriendsResponce>) => {
          state.friends = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchFriendsRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const friendsReducer = friendsSlice.reducer;
