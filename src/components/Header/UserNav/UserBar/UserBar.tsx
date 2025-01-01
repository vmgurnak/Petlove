import { Link } from 'react-router-dom';
import { SvgIcon } from '../../../../helpers/SvgIcon';
import { ICONS } from '../../../../constants/constants';

import css from './UserBar.module.css';

const UserBar = () => {
  return (
    <Link className={css.userBar} to="/profile">
      <div className={css.avatar}>
        <SvgIcon addClass={css.icon} icon={ICONS.avatar} />
      </div>
      <div className={css.name}>Anna</div>
    </Link>
  );
};

export default UserBar;
