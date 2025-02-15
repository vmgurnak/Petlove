import clsx from 'clsx';
import { FC } from 'react';

import { useAppDispatch } from '../../../../redux/hooks.ts';
import { apiLogout } from '../../../../redux/auth/operations.ts';

import css from './LogOutBtn.module.css';
interface LogOutBtnProps {
  isLight?: boolean;
}
const LogOutBtn: FC<LogOutBtnProps> = ({ isLight }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(apiLogout());
  };

  return (
    <button
      className={clsx(css.logOut, isLight && css.light)}
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
};

export default LogOutBtn;
