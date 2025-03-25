import { RootState } from '../store';

export const selectModalIsOpen = (state: RootState) => state.modals.modalIsOpen;
export const selectAfterOpen = (state: RootState) => state.modals.afterOpen;
export const selectBeforeClose = (state: RootState) => state.modals.beforeClose;
export const selectModalIsLogOut = (state: RootState) =>
  state.modals.modalIsLogOut;
