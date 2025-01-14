import Title from '../../Title/Title';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={css.registrationForm}>
      <Title textTitle="Registration" addClass={css.title} />
      <p className={css.text}>Thank you for your interest in our platform.</p>
    </div>
  );
};

export default RegistrationForm;
