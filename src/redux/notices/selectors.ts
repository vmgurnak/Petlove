import { RootState } from '../store';
import { INoticesItem, INoticesResponse } from '../../types.ts';

// Selectors notices
export const selectNotices = (state: RootState): INoticesResponse =>
  state.notices.notices;
export const selectNoticesList = (state: RootState): INoticesItem[] =>
  state.notices.notices.results;
export const selectTotalPages = (state: RootState): number =>
  state.notices.notices.totalPages;
export const selectIsLoading = (state: RootState): boolean =>
  state.notices.isLoading;
export const selectIsError = (state: RootState): boolean =>
  state.notices.isError;
