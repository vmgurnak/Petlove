import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import Header from '../../components/Header/Header';
import PetBlock from '../../components/PetBlock/PetBlock';

import css from './LoginPage.module.css';

import { IMAGES_LOGIN } from '../../constants/constants';

const RegistrationPage = () => {
  return (
    <div className={css.loginPage}>
      <Header addClass={css.header} />
      <div className={css.loginPageWrap}>
        <PetBlock images={IMAGES_LOGIN} />
        <LoginForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
