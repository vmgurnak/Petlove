import clsx from 'clsx';
import { FC } from 'react';

import { useAppDispatch } from '../../../../redux/hooks.ts';
import {
  changeModal,
  changeAfterOpen,
  changeModalIsLogOut,
} from '../../../../redux/modal/slice.ts';
import { apiLogout } from '../../../../redux/auth/operations.ts';

import css from './LogOutBtn.module.css';
interface LogOutBtnProps {
  isLight?: boolean;
}
const LogOutBtn: FC<LogOutBtnProps> = ({ isLight }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(changeModal(true));
    setTimeout(() => {
      dispatch(changeAfterOpen(true));
    }, 500);
  };

  const handleModalIsLogOut = () => {
    dispatch(changeModalIsLogOut(true));
  };

  const handleLogOut = () => {
    dispatch(apiLogout());
  };

  return (
    <button
      className={clsx(css.logOut, isLight && css.light)}
      // onClick={handleLogOut}
      onClick={() => {
        handleOpenModal();
        handleModalIsLogOut();
      }}
    >
      Log Out
    </button>
  );
};

export default LogOutBtn;
