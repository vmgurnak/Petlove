import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
