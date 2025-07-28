import { FC } from 'react';
import { useWindowSize } from 'react-use';
import clsx from 'clsx';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import MenuMobileBtn from './MenuMobileBtn/MenuMobileBtn';

import { useAppSelector } from '../../redux/hooks.ts';
import { selectIsLogged } from '../../redux/auth/selectors.ts';

import css from './Header.module.css';

interface HeaderProps {
  addClass?: string;
  isLight?: boolean;
}

const Header: FC<HeaderProps> = ({ addClass, isLight }): JSX.Element => {
  const { width } = useWindowSize();
  const isLogged = useAppSelector(selectIsLogged);

  return (
    <header className={clsx(css.header, addClass, isLight && css.light)}>
      <Logo addClass={clsx(css.logo, isLight && css.light)} isLight={isLight} />
      {width >= 1280 && <Nav addClass={css.nav} isLight={isLight} />}
      {width >= 768 &&
        (isLogged ? (
          <UserNav addClass={css.userNav} isLight={isLight} />
        ) : (
          <AuthNav addClass={css.authNav} isLight={isLight} />
        ))}
      {width < 1280 && <MenuMobileBtn isLight={isLight} />}
    </header>
  );
};

export default Header;
