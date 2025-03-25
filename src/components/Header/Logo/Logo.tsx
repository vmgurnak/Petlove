import { Link } from 'react-router-dom';
import { FC } from 'react';
import clsx from 'clsx';

import { SvgIcon } from '../../REUSABLE/SvgIcon.tsx';
import { ICONS } from '../../../constants/constants.ts';

import css from './Logo.module.css';

interface LogoProp {
  addClass?: string;
  isLight?: boolean;
}

const Logo: FC<LogoProp> = ({ addClass, isLight }): JSX.Element => {
  return (
    <Link className={clsx(css.logo, addClass, isLight && css.light)} to="/">
      petl
      <SvgIcon
        addClass={clsx(css.icon, isLight && css.light)}
        icon={ICONS.heart}
      />
      ve
    </Link>
  );
};

export default Logo;
