import clsx from 'clsx';
import { FC } from 'react';

import { ICONS } from '../../../constants/constants.ts';
import { SvgIcon } from '../../../helpers/SvgIcon.tsx';

import css from './MenuMobileBtn.module.css';

interface MenuMobileBtnProps {
  openMenu?: () => void;
  isLight?: boolean;
}

const MenuMobileBtn: FC<MenuMobileBtnProps> = ({ openMenu, isLight }) => {
  return (
    <button className={css.btnMenu} onClick={openMenu}>
      <SvgIcon
        addClass={clsx(css.iconMenu, isLight && css.light)}
        icon={ICONS.mobMenu}
      />
    </button>
  );
};

export default MenuMobileBtn;
