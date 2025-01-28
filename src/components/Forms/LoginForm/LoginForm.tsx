import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputForm from '../InputForm/InputForm.tsx';
import Title from '../../Title/Title';
import { loginFormValidation } from '../../../Validation/loginFormValidation.ts';

import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginFormValidation),
  });

  const onSubmit = (data: object) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.loginWrap}>
      <div className={css.loginForm}>
        <Title textTitle="Log in" addClass={css.title} />
        <p className={css.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <form
          className={css.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
          noValidate
        >
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
          <button className={css.btn} type="submit">
            Log in
          </button>
          <p className={css.textLink}>
            Don’t have an account?
            <Link className={css.link} to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
