import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';

import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Nav />
      <AuthNav />
    </div>
  );
};

export default Header;
