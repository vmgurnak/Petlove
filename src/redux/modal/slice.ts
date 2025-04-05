import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalState {
  modalIsOpen: boolean;
  afterOpen: boolean;
  beforeClose: boolean;
  modalIsLogOut: boolean;
}

const INITIAL_STATE: IModalState = {
  modalIsOpen: false,
  afterOpen: false,
  beforeClose: false,
  modalIsLogOut: false,
};

export const Modals = createSlice({
  name: 'modals',
  initialState: INITIAL_STATE,
  reducers: {
    changeModal(state, action: PayloadAction<boolean>) {
      state.modalIsOpen = action.payload;
    },
    changeBeforeClose(state, action: PayloadAction<boolean>) {
      state.beforeClose = action.payload;
    },
    changeAfterOpen(state, action: PayloadAction<boolean>) {
      state.afterOpen = action.payload;
    },
    changeModalIsLogOut(state, action: PayloadAction<boolean>) {
      state.modalIsLogOut = action.payload;
    },
  },
});

export const {
  changeModal,
  changeAfterOpen,
  changeBeforeClose,
  changeModalIsLogOut,
} = Modals.actions;

export const modalsReducer = Modals.reducer;
