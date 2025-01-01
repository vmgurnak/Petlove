import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import clsx from 'clsx';

import css from './AuthNav.module.css';

interface AuthNavProps {
  addClass?: string;
}

const AuthNav: FC<AuthNavProps> = ({ addClass }): JSX.Element => {
  return (
    <div className={clsx(css.authNav, addClass)}>
      <NavLink className={css.login} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.register} to="/register">
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
