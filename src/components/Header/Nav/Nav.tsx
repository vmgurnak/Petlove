import { NavLink } from 'react-router-dom';

import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </nav>
  );
};

export default Nav;
