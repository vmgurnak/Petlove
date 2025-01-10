import { NavLink } from 'react-router-dom';

import css from './Nav.module.css';
import clsx from 'clsx';
import { FC } from 'react';

const buildClass = ({ isActive }: { isActive: boolean }) =>
  clsx(css.link, isActive && css.active);

interface NavProps {
  addClass?: string;
  isLight?: boolean;
}

const Nav: FC<NavProps> = ({ addClass, isLight }): JSX.Element => {
  return (
    <nav className={clsx(css.nav, addClass, isLight && css.light)}>
      <NavLink className={buildClass} to="/news">
        News
      </NavLink>
      <NavLink className={buildClass} to="/notices">
        Find pet
      </NavLink>
      <NavLink className={buildClass} to="/friends">
        Our friends
      </NavLink>
    </nav>
  );
};

export default Nav;
