import RegistrationForm from '../../components/Forms/RegistationForm/RegistrationForm';
import Header from '../../components/Header/Header';
import PetBlock from '../../components/PetBlock/PetBlock';
import css from './RegistrationPage.module.css';

import { IMAGES_REG } from '../../constants/constants';

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <Header addClass={css.header} />
      <div className={css.registrationPageWrap}>
        <PetBlock images={IMAGES_REG} />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
