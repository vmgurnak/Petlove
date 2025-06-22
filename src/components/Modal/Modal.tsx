import clsx from 'clsx';
import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../../src/redux/hooks.ts';
import { useAppSelector } from '../../../src/redux/hooks.ts';
import {
  changeModal,
  changeAfterOpen,
  changeBeforeClose,
  changeModalIsLogOut,
} from '../../../src/redux/modal/slice.ts';

import {
  selectAfterOpen,
  selectBeforeClose,
  selectModalIsLogOut,
} from '../../../src/redux/modal/selecrots.ts';

import CloseButton from './CloseButton/CloseButton';

import css from './Modal.module.css';
import ModalLogOut from './ModalLogOut/ModalLogOut.tsx';

interface IModalProps {
  children?: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const afterOpen = useAppSelector(selectAfterOpen);
  const beforeClose = useAppSelector(selectBeforeClose);
  const modalIsLogOut = useAppSelector(selectModalIsLogOut);

  const onCloseModal = () => {
    dispatch(changeBeforeClose(true));
    dispatch(changeAfterOpen(false));
    setTimeout(() => {
      dispatch(changeModal(false));
      dispatch(changeBeforeClose(false));
      dispatch(changeModalIsLogOut(false));
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <div
      className={clsx(
        css.modalOverlay,
        afterOpen && css.afterOpen,
        beforeClose && css.beforeClose
      )}
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <CloseButton addClass={css.btnClose} onCloseModal={onCloseModal} />
        {modalIsLogOut && <ModalLogOut onCloseModal={onCloseModal} />}
        {children}
      </div>
    </div>
  );
};

export default Modal;
