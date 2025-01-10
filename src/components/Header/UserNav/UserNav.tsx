import { FC } from 'react';
import clsx from 'clsx';
import LogOutBtn from './LogOutBtn/LogOutBtn';
import UserBar from './UserBar/UserBar';

import css from './UserNav.module.css';

interface UserNavProps {
  addClass?: string;
  isLight?: boolean;
}

const UserNav: FC<UserNavProps> = ({ addClass, isLight }): JSX.Element => {
  return (
    <div className={clsx(css.userNav, addClass)}>
      <LogOutBtn isLight={isLight} />
      <UserBar isLight={isLight} />
    </div>
  );
};

export default UserNav;
