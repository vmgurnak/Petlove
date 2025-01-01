import { Link } from 'react-router-dom';
import { FC } from 'react';
import clsx from 'clsx';

import { SvgIcon } from '../../../helpers/SvgIcon.tsx';
import { ICONS } from '../../../constants/constants.ts';

import css from './Logo.module.css';

interface LogoProp {
  addClass?: string;
}

const Logo: FC<LogoProp> = ({ addClass }): JSX.Element => {
  return (
    <Link className={clsx(css.logo, addClass)} to="/">
      petl
      <SvgIcon addClass={css.icon} icon={ICONS.heart} />
      ve
    </Link>
  );
};

export default Logo;
