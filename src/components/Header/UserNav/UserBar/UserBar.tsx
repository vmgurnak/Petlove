import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon } from '../../../../helpers/SvgIcon';
import { ICONS } from '../../../../constants/constants';

import { useAppSelector } from '../../../../redux/hooks.ts';
import { selectName } from '../../../../redux/auth/slice.ts';

import css from './UserBar.module.css';

interface UserBarProps {
  isLight?: boolean;
}

const UserBar: FC<UserBarProps> = ({ isLight }) => {
  const name = useAppSelector(selectName);

  return (
    <Link className={css.userBar} to="/profile">
      <div className={css.avatar}>
        <SvgIcon addClass={css.icon} icon={ICONS.avatar} />
      </div>
      <div className={clsx(css.name, isLight && css.light)}>{name}</div>
    </Link>
  );
};

export default UserBar;
