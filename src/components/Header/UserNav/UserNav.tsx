import { FC } from 'react';
import clsx from 'clsx';
import LogOutBtn from './LogOutBtn/LogOutBtn';
import UserBar from './UserBar/UserBar';

import css from './UserNav.module.css';

interface UserNavProps {
  addClass?: string;
}

const UserNav: FC<UserNavProps> = ({ addClass }): JSX.Element => {
  return (
    <div className={clsx(css.userNav, addClass)}>
      <LogOutBtn />
      <UserBar />
    </div>
  );
};

export default UserNav;
