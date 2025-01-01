import { ICONS } from '../../../constants/constants.ts';
import { SvgIcon } from '../../../helpers/SvgIcon.tsx';

import css from './MenuMobileBtn.module.css';

const MenuMobileBtn = ({ openMenu }) => {
  return (
    <button className={css.btnMenu} onClick={openMenu}>
      <SvgIcon addClass={css.iconMenu} icon={ICONS.mobMenu} />
    </button>
  );
};

export default MenuMobileBtn;
