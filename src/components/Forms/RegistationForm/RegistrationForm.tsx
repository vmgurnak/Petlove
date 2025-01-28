import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputForm from '../InputForm/InputForm.tsx';
import Title from '../../Title/Title';
import { regFormValidation } from '../../../Validation/regFormValidation.ts';

import css from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(regFormValidation),
  });

  const onSubmit = (data: object) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.registrationWpap}>
      <div className={css.registrationForm}>
        <Title textTitle="Registration" addClass={css.title} />
        <p className={css.text}>Thank you for your interest in our platform.</p>
        <form
          className={css.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
          noValidate
        >
          <InputForm
            placeholder="Name"
            error={errors.name ? true : false}
            valueInput={watch('name')}
            addClass={css.inputWrap}
            {...register('name')}
          >
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </InputForm>
          <InputForm
            type="email"
            placeholder="Email"
            error={errors.email ? true : false}
            valueInput={watch('email')}
            addClass={css.inputWrap}
            {...register('email')}
          >
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </InputForm>
          <InputForm
            type="password"
            placeholder="Password"
            error={errors.password ? true : false}
            valueInput={watch('password')}
            iconEye={true}
            addClass={css.inputWrap}
            {...register('password')}
          >
            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}
          </InputForm>
          <InputForm
            type="password"
            placeholder="Confirm Password"
            error={errors.repeatPassword ? true : false}
            valueInput={watch('repeatPassword')}
            iconEye={true}
            addClass={css.inputWrap}
            {...register('repeatPassword')}
          >
            {errors.repeatPassword && (
              <p className={css.error}>{errors.repeatPassword.message}</p>
            )}
          </InputForm>
          <button className={css.btn} type="submit">
            Registration
          </button>
          <p className={css.textLink}>
            Already have an account?
            <Link className={css.link} to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
