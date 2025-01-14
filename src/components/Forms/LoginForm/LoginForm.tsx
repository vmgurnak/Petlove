import Title from '../../Title/Title';
import css from './LoginForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={css.loginForm}>
      <Title textTitle="Log in" addClass={css.title} />
      <p className={css.text}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
    </div>
  );
};

export default RegistrationForm;
