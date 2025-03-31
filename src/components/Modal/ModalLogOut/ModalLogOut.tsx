import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { IMAGES_MODAL } from '../../../constants/constants.ts';
import Button from '../../REUSABLE/Button/Button.tsx';

import { useAppDispatch } from '../../../redux/hooks.ts';
import { apiLogout } from '../../../redux/auth/operations.ts';

import css from './ModalLogOut.module.css';

interface IModalLogOutProps {
  onCloseModal: () => void;
}

const ModalLogOut: FC<IModalLogOutProps> = ({ onCloseModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(apiLogout())
      .unwrap()
      .then(() => {
        toast('Logout successful');
      })
      .catch((error) => toast.error(error.response.data.message));
    navigate('/');
    onCloseModal();
  };

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
        <Button addClass={css.btnYes} type="submit" onClick={handleLogOut}>
          Yes
        </Button>
        <Button addClass={css.btnCancel} onClick={onCloseModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ModalLogOut;
