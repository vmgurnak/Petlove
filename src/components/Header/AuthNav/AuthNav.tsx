import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </div>
  );
};

export default AuthNav;
