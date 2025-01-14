import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import Header from '../../components/Header/Header';
import css from './LoginPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.loginPage}>
      <Header addClass={css.header} />
      <div className={css.loginPageWrap}>
        <div className={css.imgWrap}></div>
        <LoginForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
