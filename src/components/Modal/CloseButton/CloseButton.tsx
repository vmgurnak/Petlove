import { FC } from 'react';
import clsx from 'clsx';

import { SvgIcon } from '../../REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants';

import css from './CloseButton.module.css';

interface ICloseButtonProps {
  addClass?: string;
  onCloseModal: () => void;
}

const CloseButton: FC<ICloseButtonProps> = ({ addClass, onCloseModal }) => {
  return (
    <button className={clsx(css.btnClose, addClass)} onClick={onCloseModal}>
      <SvgIcon addClass={css.iconBtnClose} icon={ICONS.modalClose} />
    </button>
  );
};

export default CloseButton;
