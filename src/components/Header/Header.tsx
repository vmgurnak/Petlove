import { useWindowSize } from 'react-use';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import MenuMobileBtn from './MenuMobileBtn/MenuMobileBtn';

import css from './Header.module.css';

const Header = () => {
  const { width } = useWindowSize();
  const isLoggerIn = false;

  return (
    <header className={css.header}>
      <Logo addClass={css.logo} />
      {width >= 1280 && <Nav addClass={css.nav} />}
      {width >= 768 &&
        (isLoggerIn ? (
          <UserNav addClass={css.userNav} />
        ) : (
          <AuthNav addClass={css.authNav} />
        ))}
      {width < 1280 && <MenuMobileBtn />}
    </header>
  );
};

export default Header;
