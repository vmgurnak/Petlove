import { IMAGES_MODAL } from '../../../constants/constants.ts';
import Button from '../../REUSABLE/Button/Button.tsx';

import css from './ModalLogOut.module.css';

const ModalLogOut = () => {
  return (
    <div className={css.modalLogOut}>
      <picture className={css.catImg}>
        <source
          srcSet={`${IMAGES_MODAL.catImgMob1x} 1x, ${IMAGES_MODAL.catImgMob2x} 2x`}
          media="(min-width: 375px)"
        />
        <img src={IMAGES_MODAL.catImgMob1x} alt="Modal LogOut image - Cat" />
      </picture>
      <p className={css.text}>Already leaving?</p>
      <div className={css.buttonWrap}>
        <Button addClass={css.btnYes} type="submit">
          Yes
        </Button>
        <Button addClass={css.btnCancel}>Cancel</Button>
      </div>
    </div>
  );
};

export default ModalLogOut;
