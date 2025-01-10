import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import clsx from 'clsx';

import css from './AuthNav.module.css';

interface AuthNavProps {
  addClass?: string;
  isLight?: boolean;
}

const AuthNav: FC<AuthNavProps> = ({ addClass, isLight }): JSX.Element => {
  return (
    <div className={clsx(css.authNav, addClass)}>
      <NavLink className={clsx(css.login, isLight && css.light)} to="/login">
        Log In
      </NavLink>
      <NavLink
        className={clsx(css.register, isLight && css.light)}
        to="/register"
      >
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
