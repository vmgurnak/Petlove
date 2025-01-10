import { FC } from 'react';
import { useWindowSize } from 'react-use';
import clsx from 'clsx';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import MenuMobileBtn from './MenuMobileBtn/MenuMobileBtn';

import css from './Header.module.css';

interface HeaderProps {
  addClass?: string;
  isLight?: boolean;
}

const Header: FC<HeaderProps> = ({ addClass, isLight }): JSX.Element => {
  const { width } = useWindowSize();
  const isLoggerIn = false;

  return (
    <header className={clsx(css.header, addClass)}>
      <Logo addClass={css.logo} isLight={isLight} />
      {width >= 1280 && <Nav addClass={css.nav} isLight={isLight} />}
      {width >= 768 &&
        (isLoggerIn ? (
          <UserNav addClass={css.userNav} isLight={isLight} />
        ) : (
          <AuthNav addClass={css.authNav} isLight={isLight} />
        ))}
      {width < 1280 && <MenuMobileBtn isLight={isLight} />}
    </header>
  );
};

export default Header;
