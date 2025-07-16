// import { createAsyncThunk } from '@reduxjs/toolkit';

// import { requestFriends } from '../../services/api';
// import { INewsParams, INewsResponse } from '../../types.ts';

// export const fetchNewsRequest = createAsyncThunk<INewsResponse, INewsParams>(
//   'fetchNewsRequest',
//   async (paramsRequest, thunkAPI) => {
//     try {
//       const response = await requestFriends(paramsRequest);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
