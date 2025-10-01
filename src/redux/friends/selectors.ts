import { RootState } from '../store';

import { IFriendsResponce } from '../../types.ts';

// Selectors friends
export const selectFriends = (state: RootState): IFriendsResponce =>
  state.friends.friends;
export const selectIsLoading = (state: RootState): boolean =>
  state.friends.isLoading;
export const selectIsError = (state: RootState): boolean =>
  state.friends.isError;
