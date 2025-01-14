import RegistrationForm from '../../components/Forms/RegistationForm/RegistrationForm';
import Header from '../../components/Header/Header';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <Header addClass={css.header} />
      <div className={css.registrationPageWrap}>
        <div className={css.imgWrap}></div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
