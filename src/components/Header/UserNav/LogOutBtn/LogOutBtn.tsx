import clsx from 'clsx';
import { FC } from 'react';

import css from './LogOutBtn.module.css';
interface LogOutBtnProps {
  isLight?: boolean;
}
const LogOutBtn: FC<LogOutBtnProps> = ({ isLight }) => {
  return (
    <button className={clsx(css.logOut, isLight && css.light)}>Log Out</button>
  );
};

export default LogOutBtn;
